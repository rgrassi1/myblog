import React, { useMemo } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { Container } from './styles';

const numberOfPosts = 3;

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

interface IPosts {
  posts: IPost[];
}

interface IPostFormatted {
  id: string;
  title: string;
  dateFormatted: string;
}

const PostsSummary: React.FC<IPosts> = ({ posts }) => {
  const formattedPosts = useMemo<IPostFormatted[]>(() => {
    return posts.filter((post, idx) => idx < numberOfPosts);
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
            <p>{post.dateFormatted}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PostsSummary;
