import styled from "styled-components";
import { css } from "styled-components";

export const PokeContainer = styled.div`
    position: absolute;
    margin-top: 10px;
    background-color: ${(props) => (props.darkMode ? '#202020' : 'white')};
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    padding: 15px;
    border-top: ${(props) => (props.darkMode ? '4px solid red' : '4px solid #4747ff')};
    transform: translateY(-400%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${(props) => 
        props.active &&
        css`
        ;
        transform: translateY(0%);

        `
    }
`
export const PokeFloatStyled = styled.img`
    border: 1px solid black;
    position: absolute;
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
        background-color: ${(props) => (props.darkMode ? 'black' : 'gainsboro')};
        height: 30px;
        width: 250px;  
        color: ${(props) => (props.darkMode ? 'white' : 'black')};
        padding: 5px;
        outline: none;
        padding-left: 10px;
        transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    }
    button{
        background-color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 5px;
        color:white;
        transform: rotate(180deg);
        transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    }
`

export const ImgStyled = styled.img`

    position: absolute;
    height: 300px;
    border-radius: 5px;
     z-index: 1;
     animation: infinite-scale 2s ease-in-out; 

     @keyframes infinite-scale {
        0% {
             transform: scale(1);
            }
        50% {
            transform: scale(2); 
            }
        100% {
            transform: scale(1); 
        }
    }
 
`

export const CardStyled = styled.div`
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    color: ${(props) => (props.darkMode ? 'white' : '#202020')};

    div{
        transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
        text-align: center;
        h2{
            transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
            font-size: 24px;
            margin-bottom: 10px;
            text-align: center;
            color: white;
            background-color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
        }
    }
` 