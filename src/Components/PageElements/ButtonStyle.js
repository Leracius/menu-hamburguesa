import styled from "styled-components";
import { css } from "styled-components";

export const StyledCard = styled.div`
    width: 300px;
    position: absolute;
    bottom: 30px;
    left: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    /* @media (max-width: 768px){
      border: 5px solid #4747ff;
      border-radius: 15px;
      background-color: #4747ff;
    } */
`

export const StyledButton = styled.button`
        transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
        background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
        color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
        border: none;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        /* margin: 0 20px 40px 20px; */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        cursor: pointer;
        
        h1{
        transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
        justify-content: center;
        align-items: center ;
        font-size: 14px;
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0;
        right: 0;
        color: white;
        border: 3px solid white;
        background-color: ${(props) => (props.darkMode ? 'red' :'#4747ff')};
        border-radius: 15px;
        padding: 0;
        }

        ${(props) => 
          props.touched && css`
          background-color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
          color: white;
          
        `}

`



