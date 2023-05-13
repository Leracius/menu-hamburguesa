import React, { useState } from 'react'
import { CardStyled, InputContainer } from './PokeCardStyles'
import { AiOutlineSearch } from "react-icons/ai"
import axios from "axios"


const PokeCard = () => {
    const [data, setData] = useState(4)
    const [pokemon, setPokemon] = useState("")

    const handleSubmit = async (e, pokemon) =>{
        e.preventDefault();
        
        try{
            let selectedPokemon = pokemon.toLowerCase().trim()

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
            setData(data)
        
        }catch(err){
            console.log(err);
        }

    }

    const { name, order, sprites, types } = data

    console.log(types[0].type.name);
  
    return (
    <>

    <CardStyled>
        <img src={sprites?.other.home.front_default}></img>
        <div>
            <h2>{name}</h2>
            <p>Tipo: {types[0].type.name}</p>
        </div>
    </CardStyled>
    <InputContainer
    
    onSubmit={(e)=>{
        handleSubmit(e, pokemon)
        setPokemon("")
    }}

    >
        <input placeholder='search'
        onChange={(e)=> setPokemon(e.target.value)}
        />
        <button type='submit'><AiOutlineSearch size={24} /></button>
    </InputContainer>    
    </>
  )
}

export default PokeCard