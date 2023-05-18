import styled from "styled-components";
import { css } from "styled-components";

export const CardContainer = styled.div`
    margin: 10px;
    border-radius: 15px;
    background-color: ${(props) => (props.darkMode ? 'black' : 'white')};

    padding: 20px 5px 15px 5px;
    border: ${(props) => (props.darkMode ? '4px solid red' : '4px solid #4747ff')};
    transform: translateY(-150%);
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    ${(props) => 
        props.active &&
        css`
        transform: translateY(0);
        `
    }
`
export const CardStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    border-radius: 10px;
   
`
export const CardText = styled.h1`
    color: ${(props) => (props.darkMode ? 'white' : 'black')};
    text-align: center;
    font-weight: 800;
    font-size: 30px;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
export const CardNote = styled.div`
    width: 90%;
    height: 30px;
    background-color: #DEDEE0 ;
    border-radius: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 10px;
    text-align: center;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => (props.darkMode ? 'white' : 'black')};
    h1 {
        margin: 0;
        padding: 0;
        font-size: 20px;
        font-weight: 600;
        color: gray;
        text-align: center;
    }
    button{
        background-color: transparent;
        width: 40px;
        height: 40px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
