import styled, { css } from "styled-components";

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
        color: #4747ff;
    }
`
export const MenuContainer = styled.div`
    width: 300px;
    position: absolute;
    background-color: white;
    top: 75px;
    bottom: 75px;
    left: 0;
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    font-size: 25px;
    
    ${(props) => 
        props.active &&
        css`
        transform: translate(0%);
        border-radius: 10px;
        margin: 20px;
        border: 3px solid #4747ff;
        padding: 10px;

        
        `
    }
    ${(props) => 
        props.inactive &&
        css`
        transform: translate(-150%);
        `
    }
    h1{
        font-size: 22px;
    }
    @media (max-width: 768px){
        width: 80%;
    }
`