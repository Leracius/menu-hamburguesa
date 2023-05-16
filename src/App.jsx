import React, { useReducer } from 'react';
import MenuBurguer from "./Components/MenuBurguer/MenuBurguer"
import { StyledButton, StyledCard } from "./Components/PageElements/ButtonStyle"
import { MainStyled } from "./Components/PageElements/PageElementsStyles"
import { FooterStyled } from "./Components/PageElements/PageElementsStyles"
import PokeCard from "./Components/PokeCard/PokeCard"
import { CgPokemon } from 'react-icons/cg'
import { RiTodoLine } from 'react-icons/ri'
import Card from './Components/Card/Card'

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
    showCard: true,
    showPoke: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClickC = () => {
    dispatch({ type: ActionTypes.SHOW_CARD });
  };

  const handleClickP = () => {
    dispatch({ type: ActionTypes.SHOW_POKE });
  };

  
  return (
    <>
      <MenuBurguer></MenuBurguer>
      <MainStyled>
        <StyledCard>
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
