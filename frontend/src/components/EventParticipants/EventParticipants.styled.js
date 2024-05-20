import styled from 'styled-components';

const Title = styled.h1`
  margin-left: 20px;
  margin-bottom: 0;

  font-size: 26px;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, 80px);
  grid-gap: 1rem;

  padding: 20px;
  margin: 0;
`;

export { Title, List };
