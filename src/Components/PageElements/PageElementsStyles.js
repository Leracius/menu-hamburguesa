import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  background-color: ${(props) => (props.darkMode ? '#202020' : 'white')};
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  @media (max-width: 768px) {
    background-color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
  }
`;

export const HeaderStyled = styled(Container)`
  @media (max-width: 768px) {
    background-color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
  }
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 50%;
    color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
    transform: ${(props) => (props.darkMode ? "rotate(0deg)" : 'rotate(180deg)')};
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    cursor: pointer;
    background-color: transparent;
    @media (max-width: 768px) {
          color: white;
          right: 30px;
        }
  }
`;

export const FooterStyled = styled(Container)`
  display: flex;
  justify-content: center;
`;

export const MainStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: calc(100vh - 130px);
  background-color: ${(props) => (props.darkMode ? 'black' : 'gainsboro')};
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  overflow-x: hidden;
  overflow-y: scroll;
`;


