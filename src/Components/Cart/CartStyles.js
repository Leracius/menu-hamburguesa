import styled from "styled-components";

export const Cartcontainer = styled.div`
    width: 50px;
    height: 50px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
`
export const CartBody = styled.div`
    width: 300px;
    position: absolute;
    background-color: white;
    top: 75px;
    bottom: 75px;
    right: 0;
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #0066b2;
    color: white;
    font-size: 25px;
    z-index: 3;
    @media (max-width: 768px){
        width: 100%;
    }
    h1{
        font-size: 22px;
    }
`