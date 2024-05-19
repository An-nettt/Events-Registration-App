import styled from 'styled-components';

const Item = styled.li`
  position: relative;

  list-style: none;

  border: 2px solid gray;
  border-radius: 12px;

  padding: 10px;
`;

const Title = styled.p`
  margin-left: 10px;
  font-weight: bold;
  font-size: large;
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 4px;
`;

export { Item, Title, Button };
