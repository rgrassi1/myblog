import React from 'react';
import { Container } from './styles';
import Header from './Header';
import PostList from './PostList';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <hr />
      <PostList />
    </Container>
  );
}

export default Main;
