import { useState } from "react"
import MenuBurguer from "./Components/MenuBurguer/MenuBurguer"
import { StyledButton, StyledCard } from "./Components/PageElements/ButtonStyle"
import { MainStyled } from "./Components/PageElements/PageElementsStyles"
import { FooterStyled } from "./Components/PageElements/PageElementsStyles"
import PokeCard from "./Components/PokeCard/PokeCard"
import { CgPokemon } from 'react-icons/cg'
import { RiTodoLine } from 'react-icons/ri'
import Card from './Components/Card/Card'

function App() {
  const [showCard, setShowCard] = useState(true)
  const [showPoke, setShowPoke] = useState(false)

  const handleClickC = () =>{
    setShowCard(true)
    setShowPoke(false)
  }
  const handleClickP= () =>{
    setShowPoke(true)
    setShowCard(false)
  }

  return (
    <>
      <MenuBurguer></MenuBurguer>
        <MainStyled>
        <StyledCard>
              <StyledButton onClick={handleClickP}><CgPokemon size={60}/></StyledButton>
              <StyledButton onClick={handleClickC}><RiTodoLine size={50} /></StyledButton>
          </StyledCard>
          <Card show={showCard}></Card>
          <PokeCard show={showPoke}></PokeCard>

        </MainStyled>
      <FooterStyled/>
    </>
  )
}

export default App
