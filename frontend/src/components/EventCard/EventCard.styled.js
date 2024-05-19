import styled from 'styled-components';

const Item = styled.li`
  position: relative;

  list-style: none;

  border: 3px solid gray;
  border-radius: 12px;
`;

const Title = styled.p`
  margin-left: 10px;
  font-weight: bold;
  font-size: large;
`;

const Button = styled.button`
  /* position: absolute; */

  /* padding: 8px; */
  /* bottom: 12px;
  right: 10px; */
  /* margin-left: auto; */

  background-color: lightgray;
  border: 1px solid black;
  border-radius: 4px;
`;

export { Item, Title, Button };
