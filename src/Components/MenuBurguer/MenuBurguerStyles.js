import styled, { css } from "styled-components";

const azulito = "#4747ff"
const theme = "white"

export const Container = styled.div`
    width: 50px;
    height: 50px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    i{
        color: ${azulito};
        @media (max-width: 768px){
            color: ${theme};
    }
    }

`
export const MenuContainer = styled.div`
    transform: translate(-150%);
    width: 350px;
    position: absolute;
    z-index: 20;
    top: 75px;
    bottom: 75px;
    left: 0;
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    display: flex;
    justify-content: space-between;
    background-color: ${theme};
    flex-wrap: wrap;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (max-width: 768px){
        width: 100%;
        margin: 0;
        border-radius: 0;
        border: none;
        
    }
    div{
        width: 100%;
        height: 200px;
        border-radius: 10px;
        color: ${azulito};
        background-color: gainsboro;
    }h1{
        text-align: center;
        font-size: 20px;
        background-color: white;
        border-radius: 5px;
    }
        

    
    ${(props) => 
        props.active &&
        css`
        transform: translate(0%);
        border-radius: 15px;
        margin: 20px;
        border: 4px solid ${azulito};
        width: 350px;
        `
    }


`