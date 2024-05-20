import styled from 'styled-components';

const RegisterForm = styled.form`
  position: relative;
  margin-top: 50px;
  padding: 20px;

  border: 2px solid gray;
  background-color: #fff;
  border-radius: 6px;

  width: 350px;
  height: 350px;
`;

const Text = styled.p`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  display: flex;
  padding: 5px;

  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 16px;
`;

const CheckboxText = styled.p`
  font-size: 14px;
  margin: 0px;
`;

const Button = styled.button`
  margin: 0 auto;
  display: block;

  margin-top: 20px;
  padding: 10px 15px 10px 15px;

  text-align: center;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
`;

export { RegisterForm, Text, Input, CheckboxText, Button };
