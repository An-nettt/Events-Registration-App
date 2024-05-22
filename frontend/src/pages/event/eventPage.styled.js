import styled from 'styled-components';

const Title = styled.h1`
  margin-left: 20px;
  margin-bottom: 0;

  font-size: 30px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
`;

const PaginationButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 5px;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: #0056b3;
  }
`;

export { Title, PaginationContainer, PaginationButton };
