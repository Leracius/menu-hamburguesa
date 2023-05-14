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
        color: white;
    }

`
export const MenuContainer = styled.div`
    width: 350px;
    position: absolute;
    z-index: 20;
    top: 75px;
    bottom: 75px;
    left: 0;
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    display: flex;
    justify-content: space-between;
    background-color: white;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @media (max-width: 768px){
        width: 100%;
        margin: 0;
        border: none;
    }
    div{
        width: 100%;
        height: 200px;
        border-radius: 10px;
        color: #4747ff;
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
        border: 3px solid #4747ff;
        `
    }
    ${(props) => 
        props.inactive &&
        css`
        transform: translate(-150%);
        `
    }


`