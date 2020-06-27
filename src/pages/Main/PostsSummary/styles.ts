import styled from 'styled-components';

export const Container = styled.section`
  > h2 {
    color: #444;
    font-size: 3em;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0 32px;
    letter-spacing: 3px;
    line-height: 38px;
  }

  > h2 > svg {
    vertical-align: -10%;
    margin-right: 8px;
  }

  > ul {
    margin-top: 32px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  > ul > li {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 16px 32px 32px 32px;
    position: relative;
  }

  > ul > li:hover {
    background: #fff;
  }

  > ul > li > h3 {
    font-size: 2em;
    font-weight: 700;
    padding: 16px 0;
  }

  > ul > li > h3 > a {
    text-transform: uppercase;
    text-decoration: none;
    color: #aaa;
    font-size: 1.5em;
  }

  > ul > li > h3 > a:hover {
    color: #c66;
  }

  > ul > li > h3 > a::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  > ul > li > p {
    font-size: 1.75em;
    color: #444;
    font-weight: 400;
  }
`;
