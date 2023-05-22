import { HeoreContainer } from './HeroeStyles'
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion"

const Heroe = (props) => {

    const [currentTime, setCurrentTime] = useState(new Date());
    const darkMode = useSelector((state) => state.theme.darkMode);
    const direccion = useSelector((state)=>state.theme.pokepath)

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const hourOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
  
    const formattedTime = currentTime.toLocaleTimeString(undefined, hourOptions);
  
return (
    <HeoreContainer darkMode={darkMode} active={props.show} >
        <motion.img
            
            src={direccion==""?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png":direccion}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}>
        </motion.img>
        
        <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}>
                {formattedTime}
        </motion.div>
        {/* <div>{formattedTime}</div> */}
    </HeoreContainer>
  )
}

export default Heroe