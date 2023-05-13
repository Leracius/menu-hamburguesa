import React from 'react'
import { MainStyled } from './PageElementsStyles'
import PokeCard from '../PokeCard/PokeCard'



const PageElements = () => {
  return (
    <>
      <MainStyled>
        <PokeCard/>
      </MainStyled>
      
    </>
  )
}

export default PageElements