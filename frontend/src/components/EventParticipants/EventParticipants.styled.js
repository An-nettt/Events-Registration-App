import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  margin-left: 20px;
  margin-bottom: 0;

  font-size: 26px;
`;

const Input = styled.input`
  width: 240px;
  height: 28px;
  margin-left: 24px;
  padding-left: 24px;
  border-radius: 6px;


  background-color: #f7f7fb;
  border: none;
  border: 1px solid rgba(138, 138, 137, 0.2);

  font-weight: 500;
  font-size: 16px;
  line-height: 1.11;
  color: #121417;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, 80px);
  grid-gap: 1rem;

  padding: 20px;
  margin: 0;
`;

const BackLink = styled(Link)`
  display: inline-block;

  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 16px;
  padding: 8px 16px;

  text-decoration: none;

  background-color: lightgray;
  color: white;
  border-radius: 4px;

  &:hover {
    background-color: gray;
  }
`;

export { Title, Input, List, BackLink };
