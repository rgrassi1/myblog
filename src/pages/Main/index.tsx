import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { isAfter, format } from 'date-fns';
import api from '../../services/api';
import { Container } from './styles';
import Header from './Header';
import PostsSummary from './PostsSummary';
import PostList from './PostList';

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

interface IRequestedPost {
  id: string;
  title: string;
  body: string;
  metadata: {
    publishedAt: string;
    authorId: number;
  };
}

const Main: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  useEffect(() => {
    Promise.all([
      api.get<IRequestedPost[]>('5be5e3fa2f000082000fc3f8'),
      api.get<IAuthor[]>('5be5e3ae2f00005b000fc3f6'),
    ])
      .then(([postsResponse, authorsResponse]) => {
        setAuthors(authorsResponse.data);
        const formattedPosts = postsResponse.data
          .map((post) => {
            return {
              id: uuid(),
              title: post.title,
              body: post.body,
              author: authorsResponse.data.find(
                (author) => author.id === post.metadata.authorId,
              ),
              publishedAt: post.metadata.publishedAt,
              dateFormatted: format(
                new Date(post.metadata.publishedAt),
                'dd/MM/yyyy HH:mm:ss',
              ),
            };
          })
          .sort((curr, next) => {
            const currDate = new Date(curr.publishedAt);
            const nextDate = new Date(next.publishedAt);
            return isAfter(currDate, nextDate) ? -1 : 1;
          });

        setPosts(formattedPosts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Container>
      <Header />
      <hr />
      <PostsSummary posts={posts} />
      <hr />
      <PostList posts={posts} authors={authors} />
    </Container>
  );
};

export default Main;
