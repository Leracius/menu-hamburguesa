import styled from "styled-components";
import { css } from "styled-components";

export const PokeContainer = styled.div`
    position: absolute;
    margin-top: 10px;
    background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    border-radius: 15px;
    padding: 15px;
    border: ${(props) => (props.darkMode ? '5px solid red' : '5px solid #4747ff')};
    transform: translateY(-220%);
    ${(props) => 
        props.active &&
        css`
        ;
        transform: translateY(0%);

        `
    }
      @media (max-width: 768px){
        margin-top: 100px;
    
    }
`

export const InputContainer = styled.form`
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    input{
        border: none;
        background-color: ${(props) => (props.darkMode ? '#202020' : 'gainsboro')};
        height: 30px;
        width: 250px;
        border-radius: 5px;   
        color: ${(props) => (props.darkMode ? 'white' : 'black')};
        padding: 5px;
        outline: none;
        padding-left: 10px;
    }
    button{
        background-color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 5px;
        color:white;
        transform: rotate(180deg);
    }
`

export const CardStyled = styled.div`
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    display: flex;
    flex-direction: column;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => (props.darkMode ? 'white' : 'black')};
    img{
        height: 250px;
        border-radius: 5px;
    }
    div{
        transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
        text-align: center;
        h2{
            font-size: 24px;
            margin-bottom: 10px;
            text-align: center;
            width: 100%;
        }
        p{
            font-size: 16px;
            text-align: center;
        }
    }
` 