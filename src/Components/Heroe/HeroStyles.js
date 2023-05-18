import styled from "styled-components";

export const Card = styled.div`
  background-color: ${(props) => (props.darkMode ? '#333' : '#f5f5f5')};
  color: ${(props) => (props.darkMode ? '#f5f5f5' : '#333')};
  padding: 20px;
  border-radius: 8px;
`;

export const Botonsito = styled.button`
  background-color: ${(props) => (props.darkMode ? '#f5f5f5' : '#333')};
  color: ${(props) => (props.darkMode ? '#333' : '#f5f5f5')};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
