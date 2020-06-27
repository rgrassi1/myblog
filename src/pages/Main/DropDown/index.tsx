import React, { useState, ChangeEvent } from 'react';
import { FiSliders } from 'react-icons/fi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Container, DropDownButton } from './styles';

interface IAuthor {
  id: number;
  name: string;
}

type Order = {
  type: 'asc' | 'desc';
};

const icons = {
  asc: <MdKeyboardArrowUp size={16} />,
  desc: <MdKeyboardArrowDown size={16} />,
};

interface IDropDownProperties {
  authors: IAuthor[];
  order: Order;
  setAuthorId(id: number): void;
  setOrder(order: Order): void;
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
    setOrder({ ...order, type: order.type === 'asc' ? 'desc' : 'asc' });
  }

  return (
    <React.Fragment>
      <DropDownButton type="button" onClick={handleToggleVisible}>
        <FiSliders size={20} />
      </DropDownButton>
      <Container visible={visible}>
        <p>Author</p>
        <select onChange={handleAuthorChange}>
          <option value={0}>Everyone</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleOrderChange}>
          <span>
            {icons[order.type || 'asc']}
            order by date
          </span>
        </button>
      </Container>
    </React.Fragment>
  );
};

export default DropDown;
