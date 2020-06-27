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
  publishedAt: string;
  dateFormatted: string;
}

interface IPostListProperties {
  posts: IPost[];
  authors: IAuthor[];
}

type Order = {
  type: 'asc' | 'desc';
};

const PostList: React.FC<IPostListProperties> = ({ posts, authors }) => {
  const [authorId, setAuthorId] = useState(0);
  const [order, setOrder] = useState<Order>({ type: 'desc' });

  const formattedPosts = useMemo<IPost[]>(() => {
    return posts
      .filter((post) => post.author?.id === authorId || !authorId)
      .sort((curr, next) => {
        const currDate = new Date(curr.publishedAt);
        const nextDate = new Date(next.publishedAt);
        if (order.type === 'desc') {
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
              <a href=".">{post.title}</a>
            </h3>
            <p>{post.body}</p>
            <p>
              <span>{post.author?.name}</span>
              <span>{post.dateFormatted}</span>
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PostList;
