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
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    @media (max-width: 768px){
      position: relative;
      button{
        margin: 10px;
      }

    }
`

export const StyledButton = styled.button`
        background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
        color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
        border: none;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin: 0 20px 40px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        cursor: pointer;
        &:hover{
          border: ${(props) => (props.darkMode ? '4px solid red' : '4px solid #4747ff')};;
        }

        @media (max-width: 768px){
          border: none;
        }

        ${(props) => 
          props.touched && css`
          background-color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
          color: white;
        `}

`



