import React, { useState } from 'react';
import { FiSliders } from 'react-icons/fi';
import { Container, DropDownButton } from './styles';

interface IAuthor {
  id: number;
  name: string;
}

interface IDropDownProperties {
  authors: IAuthor[];
}

const DropDown: React.FC<IDropDownProperties> = ({ authors }) => {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <React.Fragment>
      <DropDownButton type="button" onClick={handleToggleVisible}>
        <FiSliders color="#c66" size={20} />
      </DropDownButton>
      <Container visible={visible}>
        <p>Author:</p>
        <select id="author">
          <option value={0}>Everyone</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <button type="button">ascending order</button>
      </Container>
    </React.Fragment>
  );
};

export default DropDown;
