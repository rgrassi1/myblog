import React, { useState, ChangeEvent } from 'react';
import { FiSliders } from 'react-icons/fi';
import { Container, DropDownButton } from './styles';

interface IAuthor {
  id: number;
  name: string;
}

interface IDropDownProperties {
  authors: IAuthor[];
  order: number;
  setAuthorId(id: number): void;
  setOrder(order: number): void;
}

const DropDown: React.FC<IDropDownProperties> = ({
  authors,
  order,
  setAuthorId,
  setOrder,
}) => {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleAuthorChange(event: ChangeEvent<HTMLSelectElement>) {
    setAuthorId(Number(event.target.value));
  }

  function handleOrderChange() {
    setOrder(1 - order);
  }

  return (
    <React.Fragment>
      <DropDownButton type="button" onClick={handleToggleVisible}>
        <FiSliders color="#c66" size={20} />
      </DropDownButton>
      <Container visible={visible}>
        <p>Author:</p>
        <select onChange={handleAuthorChange}>
          <option value={0}>Everyone</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleOrderChange}>
          {order === 0 ? 'ascending order' : 'descending order'}
        </button>
      </Container>
    </React.Fragment>
  );
};

export default DropDown;
