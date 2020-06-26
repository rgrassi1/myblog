import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { FiCalendar } from 'react-icons/fi';
import { Container } from './styles';

const numberOfPosts = 3;

interface IPost {
  id: string;
  title: string;
  body: string;
  metadata: {
    publishedAt: string;
    authorId: number;
  };
}

interface IPosts {
  posts: IPost[];
}

interface IPostFormatted {
  id: string;
  title: string;
  publishedAtFormatted: string;
}

const PostsSummary: React.FC<IPosts> = ({ posts }) => {
  const formattedPosts = useMemo<IPostFormatted[]>(() => {
    return posts
      .map((post) => {
        return {
          id: post.id,
          title: post.title,
          publishedAtFormatted: format(
            new Date(post.metadata.publishedAt),
            'dd/MM/yyyy HH:mm',
          ),
        };
      })
      .filter((post, idx) => idx < numberOfPosts);
  }, [posts]);

  return (
    <Container>
      <h2>
        <FiCalendar />
        Most Recent Posts
      </h2>
      <ul>
        {formattedPosts.map((post) => (
          <li key={post.id}>
            <h3>
              <a href=".">{post.title}</a>
            </h3>
            <p>{post.publishedAtFormatted}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PostsSummary;
