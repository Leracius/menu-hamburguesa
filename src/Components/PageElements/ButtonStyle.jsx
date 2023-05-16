import styled from "styled-components";
import { css } from "styled-components";

export const StyledCard = styled.div`
    width: 300px;
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
        background-color: white;
        color:#4747ff;
        width: 70px;
        height: 70px;
        border: none;
        border-radius: 50%;
        margin: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        border: 5px solid #4747ff;
        cursor: pointer;

        @media (max-width: 768px){
          margin: 10px;
        }

        ${(props) => 
        props.touched && css`
          background-color: #4747ff;
          color: white;
        `
    }

`

