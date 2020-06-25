import React, { useState, useEffect, useMemo } from 'react';
import { FiEdit } from 'react-icons/fi';
import { uuid } from 'uuidv4';
import { format, isAfter } from 'date-fns';
import api from '../../../services/api';
import { Container } from './styles';

interface IAuthor {
  id: number;
  name: string;
}

interface IPost {
  id: string;
  title: string;
  body: string;
  author: IAuthor | undefined;
  dateFormatted: string;
  metadata: {
    publishedAt: string;
    authorId: number;
  };
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  useEffect(() => {
    Promise.all([
      api.get<IPost[]>('5be5e3fa2f000082000fc3f8'),
      api.get<IAuthor[]>('5be5e3ae2f00005b000fc3f6'),
    ])
      .then(([postsResponse, authorsResponse]) => {
        setAuthors(authorsResponse.data);
        const formattedPosts = postsResponse.data
          .map((post) => {
            return {
              ...post,
              id: uuid(),
              author: authorsResponse.data.find(
                (author) => author.id === post.metadata.authorId,
              ),
              dateFormatted: format(
                new Date(post.metadata.publishedAt),
                'dd/MM/yyyy HH:mm',
              ),
            };
          })
          .sort((curr, next) => {
            const currDate = new Date(curr.metadata.publishedAt);
            const nextDate = new Date(next.metadata.publishedAt);
            return isAfter(currDate, nextDate) ? -1 : 1;
          });

        setPosts(formattedPosts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const formattedPosts = useMemo(() => {

  }, [posts]);

  return (
    <Container>
      <h2>
        <FiEdit />
        Featured Posts
      </h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>
              <a href="https://www.google.com">{post.title}</a>
            </h3>
            <p>{post.dateFormatted}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PostList;
