import styled from "styled-components";

export const InputContainer = styled.form`
    width: 300px;
    background-color: white;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 5px;
    input{
        border: none;
        background-color: gainsboro;
        height: 30px;
        width: 250px;
        border-radius: 5px;   
        color: black;
        padding: 5px;
    }
    button{
        background-color: #4747ff;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 5px;
        color: white;
    }
`

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 350px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    img{
        height: 250px;
        border-radius: 5px;
    }
    div{
        padding: 20px;
        text-align: center;
        h2{
            font-size: 24px;
            margin-bottom: 10px;
        }
        p{
            font-size: 16px;
            margin-bottom: 10px;
        }
    }
` 