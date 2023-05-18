import styled from "styled-components";



export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  background-color: ${(props) => (props.darkMode ? '#202020' : 'white')};
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    @media (max-width: 768px){
      background-color: ${(props) => (props.darkMode ? 'red' : '#4747ff')};
    
    }
`;

export const FooterStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  background-color: ${(props) => (props.darkMode ? '#202020' : 'white')};
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  @media (max-width: 768px){
    display: hidden;
    background-color: ${(props) => (props.darkMode ? 'black' : 'white')};

  }

`;

// calcula la altura del footer y el header para adaptarse al 100%
export const MainStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: calc(100vh - 150px);
  background-color: ${(props) => (props.darkMode ? 'black' : 'gainsboro')};
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  overflow-x: hidden;
  overflow-y: scroll;
  @media (max-width: 768px){
        flex-direction: column;
        justify-content: flex-start;
        background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
        overflow-y: hidden;
    }
`;


