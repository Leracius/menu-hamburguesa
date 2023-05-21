import React, { useReducer, useState } from 'react';

// componentes de styled components
import { MainStyled } from "./Components/PageElements/PageElementsStyles"
import { FooterStyled } from "./Components/PageElements/PageElementsStyles"
import { StyledButton, StyledCard } from "./Components/PageElements/ButtonStyle"
import MenuBurguer from "./Components/MenuBurguer/MenuBurguer"

// componentes
import Card from './Components/Card/Card'
import PokeCard from "./Components/PokeCard/PokeCard"
import Heroe from './Components/Heroe/Heroe';

// estado y funcion despachadora
import { useSelector } from 'react-redux';

// estado de mi store
import { toggleDarkMode } from './redux/Theme/ThemeSlice';

// react-icons
import { CgPokemon } from 'react-icons/cg'
import { RiTodoLine } from 'react-icons/ri'
import { BiHome } from 'react-icons/bi'

const ActionTypes = {
  SHOW_CARD: 'SHOW_CARD',
  SHOW_POKE: 'SHOW_POKE',
  SHOW_HEROE: 'SHOW_HEROE'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_CARD:
      return { showCard: true, showPoke: false, showHeroe: false };
    case ActionTypes.SHOW_POKE:
      return { showCard: false, showPoke: true, showHeroe: false };
    case ActionTypes.SHOW_HEROE:
      return { showCard: false, showPoke: false, showHeroe: true };
    default:
      return state;
  }
};

function App() {
  const initialState = {
    showCard: false,
    showPoke: false,
    showHeroe: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClickC = () => {
    dispatch({ type: ActionTypes.SHOW_CARD });
  };

  const handleClickP = () => {
    dispatch({ type: ActionTypes.SHOW_POKE });
  };

  const handleClickH = () => {
    dispatch({ type: ActionTypes.SHOW_HEROE });
  };

  const [on, setOn] = useState("")

  const handleClick = () =>{
    setOn(!on)
  }
  
  const darkMode = useSelector((state) => state.theme.darkMode)
  const count = useSelector((state) => state.theme.counter)

  return (
    <>
      <MenuBurguer></MenuBurguer>
      <MainStyled darkMode={darkMode}>
        <Heroe show={state.showHeroe}></Heroe>
        <Card show={state.showCard}></Card>
        <PokeCard show={state.showPoke}></PokeCard>
      </MainStyled>
      <FooterStyled darkMode={darkMode}>
        <StyledCard>
          <StyledButton darkMode={darkMode} touched={state.showHeroe} onClick={handleClickH}>
            <BiHome size={52} />
          </StyledButton>
          <StyledButton darkMode={darkMode} touched={state.showPoke} show onClick={handleClickP}>
            <CgPokemon size={60} />
          </StyledButton>
          <StyledButton darkMode={darkMode} touched={state.showCard} onClick={handleClickC}>
            <RiTodoLine size={50} />
            {count !== 0 && <h1>{count}</h1>}
          </StyledButton>
        </StyledCard>
      </FooterStyled>
    </>
  )
}

export default App;
