import React, { useState }  from 'react'
import { HeaderStyled } from '../PageElements/PageElementsStyles'
import { Container, MenuContainer } from './MenuBurguerStyles'

import { toggleDarkMode } from '../../redux/Theme/ThemeSlice';
import { useSelector, useDispatch } from 'react-redux'

import { BsFillSunFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'

const MenuBurguer = () => {
    const [isToggled, setIsToggled] = useState(false)
    const darkMode = useSelector((state) => state.theme.darkMode)

    const setTheme = useDispatch()

    const handleTheme = () => {
      setTheme(toggleDarkMode())
    }

    const handleClick = () => {
        setIsToggled(!isToggled); // cambia el estado de apagado a encendido o viceversa
      };

    return (
    <HeaderStyled darkMode={darkMode}>
        
        <Container darkMode={darkMode} onClick={handleClick}>
            <i darkMode={darkMode} id="bars" className="fa-solid fa-bars fa-2xl" color='white'></i>
            <MenuContainer darkMode={darkMode} active={isToggled}></MenuContainer>
        </Container>
          <button darkMode={darkMode} onClick={handleTheme}>
            {darkMode ? <BsMoonStarsFill size={25} /> : <BsFillSunFill size={25} />}
          </button>
        {/* <Cart></Cart> */}
    </HeaderStyled>
    
  )
}

export default MenuBurguer
