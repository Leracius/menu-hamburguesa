import styled from "styled-components";
import { css } from "styled-components";

export const HeoreContainer = styled.div`
    background-image :${(props) => (props.darkMode ? 'url("https://i.pinimg.com/originals/84/1d/a0/841da07e3f8a2990c3fd7318a346725d.gif")' : 'url("https://i.pinimg.com/564x/f0/10/0a/f0100a85178202b83a65cd796495a61b.jpg")')};
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
    justify-content: center;
    align-items: center;
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
        font-size: 32px;
        font-weight: 900;
        margin: 10px;
        display: flex;
        padding: 5px;
        color: white;
        -webkit-text-stroke: 1px black;
        /* color: ${(props) => (props.darkMode ? 'red' : '#4747ff')}; */
        display: flex;
        align-items: center; 
        flex-direction:column;

    }
    
`