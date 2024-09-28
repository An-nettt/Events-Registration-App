import styled from 'styled-components';

const Title = styled.h1`
  margin-left: 20px;
  margin-bottom: 0;

  font-size: 32px;
`;

const Text = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  background-color: #ffffff;
  border: none;
  border-radius: none;
  font-weight: 600;
`;

const Button = styled.button`
  margin-left: 5px;
  width: 70px;
  height: 24px;
  display: inline-block;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  background-color: #3470ff;

  font-family: inherit;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.4;
  align-items: center;
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: #0b44cd;
  }
`;

const PaginationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;

  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;

  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: blue;
  }
`;


export { Title, Text, Button, PaginationContainer, PaginationButton };
