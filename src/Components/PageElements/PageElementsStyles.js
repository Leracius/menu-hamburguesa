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
`;

export const FooterStyled = styled(Container)`
  /* @media (max-width: 768px) {
    display: hidden;
    height: 0;
  } */
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

  @media (max-width: 768px) {
    background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
  }
`;


