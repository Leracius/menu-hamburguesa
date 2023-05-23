import styled, { css } from "styled-components";

const darkModeStyles = css`
  background-color: "#202020";
`;

const lightModeStyles = css`
  background-color: white;
`;

export const CardContainer = styled.div`

  margin: 0px 10px 50px 10px;
  ${(props) => (props.darkMode ? darkModeStyles : lightModeStyles)}
  padding: 10px 10px 40px 10px;
  border-top: ${(props) => (props.darkMode ? '4px solid red' : '4px solid #4747ff')};
  transform: translateY(-200%);
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  background-color: ${(props) => (props.darkMode ? '#202020' : 'white')};

  @media (max-width: 768px) {
    border: none;
    margin: 0px 10px 300px 10px;
    width: 100%;
  }

  ${(props) =>
    props.active &&
    css`
      transform: translateY(0);
    `}
`;

export const CardStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;

  input {
    border: none;
    font-size: 20px;
    background-color: ${(props) => (props.darkMode ? 'black' : 'gainsboro')};
    height: 30px;
    width: 250px;
    color: ${(props) => (props.darkMode ? 'white' : 'black')};
    padding: 10px;
    outline: none;
    padding-left: 10px;
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    border-radius: 5px;
    @media (max-width: 768px) {
    width: 300px;
  }
  }
`;

export const CardText = styled.h1`
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  text-align: center;
  font-weight: 800;
  font-size: 30px;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const CardNote = styled.div`
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  width: 80%;
  background-color: ${(props) => (props.darkMode ? 'black' : 'gainsboro')};
  border-radius: 5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 5px;
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  max-width: 600px;


  &:hover{
    transition: none;
    opacity: 70%;
  }

  h1 {
    display: flex;
    justify-content: left;
    text-align: left;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 600;
    color: gray;
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  }

  button {
    margin-left: 10px;
    background-color: transparent;
    width: 40px;
    height: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
