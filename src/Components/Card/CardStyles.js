import styled from "styled-components";

export const CardContainer = styled.div`
    margin: 10px;
    border-radius: 15px;
    background-color: white;
    padding: 20px 5px 15px 5px;
    border: 4px solid #4747ff;
`
export const CardStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
   
`
export const CardText = styled.h1`
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
