import styled from "styled-components";
import gif from "./talk-josh.gif"

export const JoshMessage = styled.div`
    border-radius: 10px;
    border: 3px solid black;
    padding: 10px 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("https://i.pinimg.com/564x/ee/27/41/ee27413c4cbd5b672b784be65880fbe3.jpg");

`
export const MessageBubble = styled.div`
    color: black;
    background-color: white;
    text-align: center;
    padding: 10px;
    font-weight: 600;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    border: 3px solid black;
`
export const TalkJosh = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    background-image: url(${gif});
`