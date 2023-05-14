import styled from "styled-components";
import gif from "./talk-josh.gif"

export const JoshMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    background-color: gainsboro;
    border-radius: 10px;
`
export const TalkJosh = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    background-image: url(${gif});
`