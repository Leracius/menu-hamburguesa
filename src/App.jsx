import { useState } from "react"
import MenuBurguer from "./Components/MenuBurguer/MenuBurguer"
import { StyledCard } from "./Components/PageElements/ButtonStyle"
import { MainStyled } from "./Components/PageElements/PageElementsStyles"
import { FooterStyled } from "./Components/PageElements/PageElementsStyles"
import PokeCard from "./Components/PokeCard/PokeCard"
import { CgPokemon } from 'react-icons/cg'
import { RiTodoLine } from 'react-icons/ri'
import Card from './Components/Card/Card'

function App() {
  const [showCard, setShowCard] = useState(true)

  const handleClick = () =>{
    setShowCard(!showCard)
  }


  return (
    <>
      <MenuBurguer></MenuBurguer>
        <MainStyled>
          <Card show={!showCard} ></Card>
          
          <PokeCard show={showCard}></PokeCard>
            <StyledCard>
              <button onClick={handleClick} ><CgPokemon size={60}/></button>
              <button onClick={handleClick}><RiTodoLine size={50} /></button>
          </StyledCard>
        </MainStyled>
      <FooterStyled></FooterStyled>
    </>
  )
}

export default App
