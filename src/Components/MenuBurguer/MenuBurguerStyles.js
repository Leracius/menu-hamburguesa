import styled from "styled-components";

export const Container = styled.div`
    width: 50px;
    height: 50px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
    border-radius: 5px;
    cursor: pointer;
    i{
        color: white;
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
    background-color: #0066b2;
    color: white;
    font-size: 25px;
    @media (max-width: 768px){
        width: 100%;
    }
`