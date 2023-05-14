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
                {
                  isToggled?
                  <MenuContainer active>
                    <div>
                      <h1>POKE-FINDER</h1>
                    </div>
                    <div>
                      <h1>NOTAS</h1>
                    </div>
                  </MenuContainer>
                  :<MenuContainer inactive>
                </MenuContainer>
                }

        </Container>
        <Cart></Cart>
    </HeaderStyled>
    
  )
}

export default MenuBurguer
