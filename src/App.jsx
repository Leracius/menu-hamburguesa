import React, { useReducer, useState } from 'react';
import MenuBurguer from "./Components/MenuBurguer/MenuBurguer"
import { StyledButton, StyledCard } from "./Components/PageElements/ButtonStyle"
import { MainStyled } from "./Components/PageElements/PageElementsStyles"
import { FooterStyled } from "./Components/PageElements/PageElementsStyles"
import PokeCard from "./Components/PokeCard/PokeCard"
import { CgPokemon } from 'react-icons/cg'
import { RiTodoLine } from 'react-icons/ri'
import { BiHomeHeart } from 'react-icons/bi'
import Card from './Components/Card/Card'
import ThemeCard from './Components/Heroe/Heroe';


const ActionTypes = {
  SHOW_CARD: 'SHOW_CARD',
  SHOW_POKE: 'SHOW_POKE'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_CARD:
      return { showCard: true, showPoke: false };
    case ActionTypes.SHOW_POKE:
      return { showCard: false, showPoke: true };
    default:
      return state;
  }
};

function App() {
  const initialState = {
    showCard: false,
    showPoke: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClickC = () => {
    dispatch({ type: ActionTypes.SHOW_CARD });
  };

  const handleClickP = () => {
    dispatch({ type: ActionTypes.SHOW_POKE });
  };

  const [on, setOn] = useState("")

  const handleClick = () =>{
    setOn(!on)
  }
  
  return (
    <>
      <MenuBurguer></MenuBurguer>
      <MainStyled>
        {/* <ThemeCard></ThemeCard> */}
        <StyledCard>
          <StyledButton black={on} show onClick={handleClick}><BiHomeHeart size={53}/></StyledButton>
          <StyledButton touched={state.showPoke} show onClick={handleClickP}><CgPokemon size={60}/></StyledButton>
          <StyledButton touched={state.showCard} onClick={handleClickC}><RiTodoLine size={50} /></StyledButton>
        </StyledCard>
        <Card show={state.showCard}></Card>
        <PokeCard show={state.showPoke}></PokeCard>
      </MainStyled>
      <FooterStyled/>
    </>
  )
}

export default App;
