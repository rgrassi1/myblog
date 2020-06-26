import React, { useState, useMemo } from 'react';
import { FiList } from 'react-icons/fi';
import { isAfter } from 'date-fns';
import { Container } from './styles';
import DropDown from '../DropDown';

interface IAuthor {
  id: number;
  name: string;
}

interface IPost {
  id: string;
  title: string;
  body: string;
  author: IAuthor | undefined;
  dateFormated: string;
  metadata: {
    publishedAt: string;
    authorId: number;
  };
}

interface IPostListProperties {
  posts: IPost[];
  authors: IAuthor[];
}

const PostList: React.FC<IPostListProperties> = ({ posts, authors }) => {
  const [authorId, setAuthorId] = useState(0);
  const [order, setOrder] = useState(0);

  const formattedPosts = useMemo<IPost[]>(() => {
    return posts
      .filter((post) => post.metadata.authorId === authorId || !authorId)
      .sort((curr, next) => {
        const currDate = new Date(curr.metadata.publishedAt);
        const nextDate = new Date(next.metadata.publishedAt);
        if (order === 0) {
          return isAfter(currDate, nextDate) ? -1 : 1;
        }
        return isAfter(currDate, nextDate) ? 1 : -1;
      });
  }, [posts, order, authorId]);

  return (
    <Container>
      <div>
        <h2>
          <FiList />
          List of Posts
        </h2>
        <DropDown
          authors={authors}
          order={order}
          setAuthorId={setAuthorId}
          setOrder={setOrder}
        />
      </div>
      <ul>
        {formattedPosts.map((post) => (
          <li key={post.id}>
            <h3>
              <a href="https://www.google.com">{post.title}</a>
            </h3>
            <p>{post.dateFormated}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PostList;
