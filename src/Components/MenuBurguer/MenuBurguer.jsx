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
            <i id="bars" className="fa-solid fa-bars fa-2xl" color='white'></i>
                {
                  isToggled?
                  <MenuContainer active>
                    <h1>hola</h1>
                  </MenuContainer>
                  :<MenuContainer inactive>
                </MenuContainer>
                }

        </Container>
        {/* <Cart></Cart> */}
    </HeaderStyled>
    
  )
}

export default MenuBurguer
