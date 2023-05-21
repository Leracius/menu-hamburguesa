import styled from "styled-components";
import { css } from "styled-components";

export const HeoreContainer = styled.div`
    background-image: url("https://i.pinimg.com/originals/eb/9a/27/eb9a27715049846b7f1d4d416b2c3cb7.gif");
    background-size: contain;
    margin-top: 20px;
    background-color: ${(props) => (props.darkMode ? '#202020' : 'white')};
    border-bottom: ${(props) => (props.darkMode ? '4px solid red' : '4px solid #4747ff')};
    color: ${(props) => (!props.darkMode ? 'black' : 'white')};
    width: 300px;
    height: 300px;
    z-index: -3;
    z-index: 90;
    display: flex;
    justify-content: end;
    align-items: end;
    flex-direction: column;
    position: absolute;
    transform: translateY(-400%);
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    ${(props) => 
        props.active &&
        css`
        ;
        transform: translateY(0%);

        `
    }
    div{
        background-size: contain;
        background-image: url("https://i.pinimg.com/originals/7f/2c/50/7f2c5092eb778b3423f634055ffea540.gif");
        width: 100px;
        height: 100px;
        font-size: 28px;
        font-weight: 500;
        margin: 10px;
        display: flex;
        padding: 5px;
        color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
        display: flex;
        align-items: center; 
        flex-direction:column;

    }
    
`