import React, { useState }  from 'react'
import { HeaderStyled } from '../PageElements/PageElementsStyles'
import { Container, MenuContainer } from './MenuBurguerStyles'
import Cart from '../Cart/Cart'

const MenuBurguer = () => {
    const [isToggled, setIsToggled] = useState(false)

    const handleClick = () => {
        setIsToggled(!isToggled); // cambia el estado de apagado a encendido o viceversa
      };

    return (
    <HeaderStyled>
        <Container onClick={handleClick}>
            <i id="bars" className="fa-solid fa-bars fa-2xl"></i>
                <MenuContainer style={{ transform: isToggled ? "translateY(0%) ": "translateY(-150%)" }}>
                  <h1>Menu Hamburguesa</h1>
               </MenuContainer>
        </Container>
        <Cart></Cart>
    </HeaderStyled>
    
  )
}

export default MenuBurguer
