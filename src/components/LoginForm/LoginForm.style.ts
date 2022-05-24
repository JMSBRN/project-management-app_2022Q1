import styled from 'styled-components';

export const Login_Form_main = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background-white);
`;
export const Login_Form_container = styled.div`
  min-width: 650px;
  height: auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: 200px 450px;
  border: 0.5px solid grey;
`;
export const User_info = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 0.5px solid grey;
`;
export const Login_Form = styled.form`
  width: 450px;
  height: auto;
  padding: 20px;
`;
export const Login_Form_input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Login_Form_input_submit = styled.input`
  width: 100%;
  height: 45px;
  margin-top: 15px;
  background-color: var(--color-button-regular);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
