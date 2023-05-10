import { useState } from 'react';
import React from 'react';
import { CartBody, Cartcontainer } from './CartStyles'
import { BsFillCartFill } from 'react-icons/bs';



const Cart = () => {
    const [isToggled, setIsToggled] = useState(false)

    const openMenu = () => {
        setIsToggled(!isToggled); // cambia el estado de apagado a encendido o viceversa
      };
  
    return (
        <Cartcontainer onClick={openMenu}>
            <BsFillCartFill color='white' size={"50px"}></BsFillCartFill>
            <CartBody style={{ transform: isToggled ? "translateY(0%) ": "translateY(-150%)"}}>
                <h1>Carrito de compras</h1>

            </CartBody>
        </Cartcontainer>
  )
}

export default Cart