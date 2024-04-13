import styled from "styled-components";

export const TodosList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 32px;
  margin-bottom: 16px;
  padding: 32px 24px;
  background-color: #424242;
  color: #fff;
  width: 600px;
  border-radius: 16px;
 row-gap: 8px;

  li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 456px;
    border-radius: 8px;
    padding: 8px 12px;
  }
  div{
    display: flex;
    width: auto;
    gap: 8px
  }

  select{
    cursor: pointer;
    border: none;
    border-radius: 8px;
    padding: 4px;
  }

  button{
    cursor: pointer;
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: #ff4122;
  }
  button:hover, button:focus{
    background-color: #df2c14;
  }
`;
