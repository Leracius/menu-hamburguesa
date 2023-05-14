import styled from "styled-components";

export const StyledCard = styled.div`
    width: 300px;
    height: 100;
    position: absolute;
    bottom:0;
    left: 50;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        transition: all 0.3s cubic-bezier(0.92, 0.01, 0.35, 0.99);
        background-color: white;
        color:#4747ff;
        width: 70px;
        height: 70px;
        border: none;
        border-radius: 50%;
        margin: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button:hover{
      background-color: #4747ff;
      color: white;
    }
    @media (max-width: 768px){
      position: relative;
      button{
        margin: 10px;
      }

    }
`

