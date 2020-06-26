import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <h1>John Doe</h1>
      <p>
        Software Developer from the Brazil, focusing his efforts on creating
        useful software products. One day he hopes to make something that really
        that make the difference the life of peoples.
      </p>
      <ul>
        <li>
          <a
            href="https://twitter.com/rgrassi1983"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter size={24} />
            Follow
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Header;
