import styled from 'styled-components';

interface IContainerProps {
  visible: boolean;
}

export const Container = styled.div<IContainerProps>`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  position: absolute;
  background: #c66;
  width: 200px;
  left: calc(100% - 32px - 190px);
  padding: 16px;
  border-radius: 4px;
  color: #fff;
  top: calc(100% + 16px);
  z-index: 1000;

  > button {
    color: #fff;
  }

  ::before {
    content: '';
    position: absolute;
    top: -16px;
    left: calc(100% - 32px);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid #c66;
  }
`;

export const DropDownButton = styled.button`
  background: transparent;
  border: 0;
  padding: 4px;
  display: block;
  > svg {
    vertical-align: middle;
  }
`;
