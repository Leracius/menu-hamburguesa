import styled from "styled-components";


const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const HeaderStyled = styled(ContainerStyled)`
  height: 75px;
  background-color: ${(props) => (props.darkMode ? '#202020' : 'white')};
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
    @media (max-width: 768px){
        background-color: #4747ff;
    
    }
`;

export const FooterStyled = styled(ContainerStyled)`
  height: 75px;
  background-color: ${(props) => (props.darkMode ? '#202020' : 'white')};
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  @media (max-width: 768px){
    display: hidden;
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
  ::-webkit-scrollbar {
  background-color: #f5f5f5;
}

  @media (max-width: 768px){
        flex-direction: column;
        justify-content: flex-start;
        background-color: white;
        overflow-y: hidden;
    }
`;


