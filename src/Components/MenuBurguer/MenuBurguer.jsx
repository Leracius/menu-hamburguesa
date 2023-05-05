import React, { useState }  from 'react'
import { HeaderStyled } from '../PageElements/PageElementsStyles'
import { Container, MenuContainer } from './MenuBurguerStyles'

const MenuBurguer = () => {
    const [isToggled, setIsToggled] = useState(false)

    const handleClick = () => {
        setIsToggled(!isToggled); // cambia el estado de apagado a encendido o viceversa
      };

    return (
    <HeaderStyled>
        <Container onClick={handleClick}>
            <i id="bars" className="fa-solid fa-bars fa-2xl"></i>
                <MenuContainer style={{ transform: isToggled ? "translate(-100%) ": "translate(0) " }}>
                    Contenido
               </MenuContainer>
        </Container>
    </HeaderStyled>
  )
}

export default MenuBurguer
