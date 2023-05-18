import React, { useState }  from 'react'
import { HeaderStyled } from '../PageElements/PageElementsStyles'
import { Container, MenuContainer } from './MenuBurguerStyles'
import Cart from '../Cart/Cart'
import store from '../../redux/store'
import { useSelector } from 'react-redux'

const MenuBurguer = () => {
    const [isToggled, setIsToggled] = useState(false)
    const darkMode = useSelector((state) => state.theme.darkMode)

    const handleClick = () => {
        setIsToggled(!isToggled); // cambia el estado de apagado a encendido o viceversa
      };

    return (
    <HeaderStyled darkMode={darkMode}>
        <Container darkMode={darkMode} onClick={handleClick}>
            <i darkMode={darkMode} id="bars" className="fa-solid fa-bars fa-2xl" color='white'></i>
            <MenuContainer darkMode={darkMode} active={isToggled}></MenuContainer>
        </Container>
        {/* <Cart></Cart> */}
    </HeaderStyled>
    
  )
}

export default MenuBurguer
