import React, { useState } from 'react'
import { CardStyled, InputContainer } from './PokeCardStyles'
import { AiOutlineSearch } from "react-icons/ai"
import axios from "axios"


const PokeCard = () => {
    const [data, setData] = useState("")
    const [pokemon, setPokemon] = useState("")
    const [titulo, setTitulo] = useState("BUSCA TU POKEMON")



    const handleSubmit = async (e, pokemon) =>{
        e.preventDefault();
        
        try{
            let selectedPokemon = pokemon.toLowerCase().trim()

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
            setData(data)
            setTitulo(data.name.toUpperCase())

        }catch(err){
            console.log(err);
        }

    }

    const { name, order, sprites, types } = data


  
    // const tipo = types[0].type.name

    return (
    <>

    <CardStyled>
        <img src={sprites?sprites.other.home.front_default:"https://i.pinimg.com/originals/9f/b1/25/9fb125f1fedc8cc62ab5b20699ebd87d.gif"}></img>
        <div>
            <h2>{titulo}</h2>
            <p>{types?types[0].type.name:""}</p>
        </div>
    </CardStyled>
    <InputContainer
    
    onSubmit={(e)=>{
        handleSubmit(e, pokemon)
        setPokemon("")
        setTitulo("BUSCA TU POKEMON")
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