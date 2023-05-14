import MenuBurguer from "./Components/MenuBurguer/MenuBurguer"
import { MainStyled } from "./Components/PageElements/PageElementsStyles"
import { FooterStyled } from "./Components/PageElements/PageElementsStyles"
import PokeCard from "./Components/PokeCard/PokeCard"

function App() {
  return (
    <>
      <MenuBurguer></MenuBurguer>
        <MainStyled>
          <PokeCard></PokeCard>
        </MainStyled>
      <FooterStyled></FooterStyled>
    </>
  )
}

export default App
