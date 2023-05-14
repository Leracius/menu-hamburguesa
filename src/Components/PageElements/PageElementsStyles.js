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
  background-color: #4747ff;
`;

export const FooterStyled = styled(ContainerStyled)`
  height: 75px;
`;

// calcula la altura del footer y el header para adaptarse al 100%
export const MainStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
  background-color: gainsboro;
  @media (max-width: 768px){
        flex-direction: column;
        justify-content: flex-start;
        background-color: white;
    
    }
`;


