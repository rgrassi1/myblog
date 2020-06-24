import React from 'react';

interface IPost {
  title: string;
  body: string;
  metadata: {
    publishedAt: string;
    authorId: number;
  };
}

const Post: React.FC<IPost> = ({ title, body, metadata }) => {
  return (
    <div></div>
  );
}

export default Post;
