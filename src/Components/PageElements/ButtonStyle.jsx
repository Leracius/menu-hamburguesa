import styled from "styled-components";
import { css } from "styled-components";

export const StyledCard = styled.div`
    width: 400px;
    height: 100;
    position: absolute;
    bottom:0;
    left: 50;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
      position: relative;
      button{
        margin: 10px;
      }

    }
`

export const StyledButton = styled.button`
        transition: all 0.3s cubic-bezier(0.92, 0.01, 0.35, 0.99);
        background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
        color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
        width: 70px;
        height: 70px;
        border: ${(props) => (props.darkMode ? '4px solid red' : 'none')};
        border-radius: 50%;
        margin: 0 20px 40px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        border: ${(props) => (props.darkMode ? '3 px solid red' : '5px solid #4747ff')};
        cursor: pointer;

        @media (max-width: 768px){
          margin: 10px;
        }

        ${(props) => 
          props.touched && css`
          background-color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
          color: white;
        `}
        ${(props) =>
          props.black && css`
          background-color: black;
          color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
          border: 5px solid tomato;
        `}

`

