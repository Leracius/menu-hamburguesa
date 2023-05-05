import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #002D62;
`;

export const HeaderStyled = styled(ContainerStyled)`
  height: 75px;
`;

export const FooterStyled = styled(ContainerStyled)`
  height: 75px;
`;

// calcula la altura del footer y el header para adaptarse al 100%
export const MainStyled = styled.main`
  width: 100%;
  height: calc(100vh - 150px);
  background-color: #00308F;
`;
