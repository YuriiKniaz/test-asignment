import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: #424242;
  color: #fff;
  width: 600px;
  border-radius: 16px;

h1{
  margin-bottom: 8px;
}

  input {
    width: 300px;
    margin-right: 8px;
    height: 24px;
    border-radius: 8px;
    border: none;
  }

  button {
    cursor: pointer;
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: #5bb85e;
  }
  button:hover, button:focus{
    background-color: #3d8c40;
  }
`;
