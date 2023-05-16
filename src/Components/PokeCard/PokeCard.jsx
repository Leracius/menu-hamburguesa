import React, { useState } from 'react'
import { CardStyled, InputContainer, PokeContainer } from './PokeCardStyles'
import { MdOutlineCatchingPokemon } from "react-icons/md"
import axios from "axios"
import Josh from '../Josh/Josh'

const PokeCard = (props) => {

    const isActive = props.show
    console.log(isActive);
    const [data, setData] = useState("")
    const [pokemon, setPokemon] = useState("")

    const [joshEnable, setJoshEnable] = useState(true)
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e, pokemon) =>{
        e.preventDefault();
        
        // setData(null)
        setData(false)
        setError(false)
        setIsloading(true)
        setJoshEnable(false)

        try{
            let selectedPokemon = pokemon.toLowerCase().trim()
            if(selectedPokemon == ""){
                setError(true)
                setData(false)
                setIsloading(false)
            }else{
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                setData(data)
                setError(false)
                setIsloading(false)
                setJoshEnable(false)
            }



        }catch(err){
            setError("Pokemon no encontrado")
            setIsloading(false)
            setJoshEnable(false)
            setData(false)
        }

    }

    const { name, order, sprites, types } =  data
  
    return (
            <PokeContainer active={isActive}>
                <CardStyled>
                    {joshEnable && <Josh message={"BUSCA TU POKEMON"} active={true}></Josh>}
                    {isLoading && 
                    <>
                    <img src='https://i.pinimg.com/originals/62/b4/d2/62b4d21eb045a1cfb5da1e667fd7a6eb.gif'/>
                    </>
                    }
                    {data &&
                    <>
                    <img src={sprites.other.home.front_default}></img>
                    <div>
                        <h2>{name.toUpperCase()}</h2>
                        <p>{types[0].type.name.toUpperCase()}</p>
                    </div>  
                    </>   
                    }
                    {error && <Josh message={"No se encontró el pokemon, prueba con un numero del 1 al 905, o busca por su nombre"} active={true} ></Josh>}
            
                </CardStyled>
            
            
                <InputContainer
                
                onSubmit={(e)=>{
                    handleSubmit(e, pokemon)
                    setPokemon("")
                }}
            
                >
                <input 
                    value={pokemon}
                    placeholder='search'
                    onChange={(e)=> setPokemon(e.target.value)}
                    />
                    <button type='submit'><MdOutlineCatchingPokemon size={24}/></button>
                </InputContainer>   
            </PokeContainer>


  )
}

export default PokeCard