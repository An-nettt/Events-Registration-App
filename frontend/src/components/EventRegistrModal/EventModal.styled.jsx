import styled from 'styled-components';

// const Modal = styled.div`
//   /* position: relative;
//   display: flex;
//   /* flex-direction: column; */
//   padding: 40px;
//   /* background: #ffffff; */
//   border-radius: 8px;
//   width: 100vw;
//   max-width: 541px;
//   height: 100wh; */
// `;

const RegisterForm = styled.form`
  /* margin: 20px; */
  padding: 0px 10px 15px 10px;
  /* border: 1px solid black; */
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  display: flex;
  padding: 5px;
  border: 1px solid #d4d4d4;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 15px 10px 15px;
  background-color: #fff;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
`;

export { RegisterForm, Text, Input, Button };
