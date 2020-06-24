import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import api from '../../../services/api';
import { FiEdit } from 'react-icons/fi'
import { Container } from './styles';

interface IPost {
  id: string;
  title: string;
  body: string;
  metadata: {
    publishedAt: string;
    author: {
      id: string;
      name: string;
    }
  };
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    api
      .get('/5be5e3fa2f000082000fc3f8')
      .then((response) => {
        const { metadata } = response.data;
        const postsFormatted = data.map((post) => {
          return {
            ...post,
            author: {
              id: uuid(),
              name: metadata.name
            }
            id: uuid(),
            title: post.title,
            body: data.body,
          };
        });
      });
  }, []);

  return (
    <Container>
      <h2>
        <FiEdit />
        Featured Posts
      </h2>
      <ul>
        <li>
          <h3>
            <a href="https://www.google.com">
              AssCo has revamped the theory of versioning
            </a>
          </h3>
          <p>
            We will mesh the buzzword \"strategic\". Our feature set is unparalleled,
            but our subscriber-defined CAE and non-complex configuration is invariably
            considered a remarkable achievement. What does the commonly-used commonly-used
            term \"strategic\" really mean? Think ultra-long-term.
            The reporting factor can be summed up in one word: B2B2C.
            Think clicks-and-mortar. We believe we know that it is better to enhance
            compellingly than to monetize dynamically. Think real-time, backward-compatible.
            The ability to synergize macro-holistically leads to the capability to envisioneer
            holistically. The implementation factor can be summed up in one word: six-sigma.
          </p>
        </li>
        <li>
          <h3>
            <a href="https://www.google.com">
              AssCo has revamped the theory of versioning
            </a>
          </h3>
          <p>
            We will mesh the buzzword \"strategic\". Our feature set is unparalleled,
            but our subscriber-defined CAE and non-complex configuration is invariably
            considered a remarkable achievement. What does the commonly-used commonly-used
            term \"strategic\" really mean? Think ultra-long-term.
            The reporting factor can be summed up in one word: B2B2C.
            Think clicks-and-mortar. We believe we know that it is better to enhance
            compellingly than to monetize dynamically. Think real-time, backward-compatible.
            The ability to synergize macro-holistically leads to the capability to envisioneer
            holistically. The implementation factor can be summed up in one word: six-sigma.
          </p>
        </li>
      </ul>
    </Container>
  );
}

export default PostList;
