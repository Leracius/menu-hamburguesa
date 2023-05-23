import React, { useState, useEffect } from 'react';
import { CardStyled, ImgStyled, InputContainer, PokeContainer } from './PokeCardStyles';
import { MdOutlineCatchingPokemon } from "react-icons/md";
import axios from "axios";
import Josh from '../Josh/Josh';
import { useSelector, useDispatch } from 'react-redux';
import { togglePath } from "../../redux/Theme/ThemeSlice";

const PokeCard = (props) => {
  const isActive = props.show;
  const [data, setData] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [joshEnable, setJoshEnable] = useState(true);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [path, setPath] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    const lastPokemon = localStorage.getItem('lastPokemon');
    if (lastPokemon) {
      setData(JSON.parse(lastPokemon));
      setJoshEnable(false)
    }
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem('lastPokemon', JSON.stringify(data));
      handlePath(data.sprites.front_default)
    }
  }, [data]);

  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();
    
    setData(false);
    setError(false);
    setIsloading(true);
    setJoshEnable(false);

    try {
      let selectedPokemon = pokemon.toLowerCase().trim();
      if (selectedPokemon === "") {
        setError(true);
        setData(false);
        setIsloading(false);
      } else {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);

        
        setData(data);
        setError(false);
        setIsloading(false);
        setJoshEnable(false);
        setPath(data.sprites.front_default)
        
      }
    } catch (err) {
      setError("Pokemon no encontrado");
      setIsloading(false);
      setJoshEnable(false);
      setData(false);
    }

  }

  const direccion = useSelector((state)=>state.theme.pokepath)

  const { name, order, sprites, types, stats } = data;

  const handlePath = () =>{
    dispatch(togglePath(data.sprites.front_default.toString()))
    console.log(direccion);
  }
 
  return (
    <PokeContainer darkMode={darkMode}  active={isActive}>
      <CardStyled darkMode={darkMode}>
        {joshEnable && <Josh message={"BUSCA TU POKEMON"} active={true}></Josh>}
        {isLoading && 
          <>
            <img src='https://i.pinimg.com/originals/62/b4/d2/62b4d21eb045a1cfb5da1e667fd7a6eb.gif'/>
          </>
        }
        {data &&
          <>
            <ImgStyled src={sprites.other.home.front_default}></ImgStyled >
            <div>
              <h2>{name.toUpperCase()}</h2>
              {/* <p>{types[0].type.name.toUpperCase()}</p> */}
            </div>  
          </>   
        }
        {error && <Josh message={"No se encontró el pokemon, prueba con un número del 1 al 905, o busca por su nombre"} active></Josh>}
      </CardStyled>
      <InputContainer darkMode={darkMode}
        onSubmit={(e) => {
          handleSubmit(e, pokemon);
          setPokemon("");
        }}
      >
        <input 
          value={pokemon}
          placeholder='search'
          onChange={(e) => setPokemon(e.target.value)}
        />
        <button type='submit'><MdOutlineCatchingPokemon size={24}/></button>
      </InputContainer>
    </PokeContainer>
  );
}

export default PokeCard;
