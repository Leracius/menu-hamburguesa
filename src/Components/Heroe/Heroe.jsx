import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux'; // Agrega el import de Provider
import { toggleDarkMode } from '../../redux/Theme/ThemeSlice';
import store from '../../redux/store'; // Importa el store de Redux
import { Card, Botonsito } from './HeroStyles'

const ThemeCard = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <Card darkMode={darkMode}>
      <h2>Theme Card</h2>
      <p>This is a card component that demonstrates dark and light themes.</p>
      <Botonsito darkMode={darkMode} onClick={() => dispatch(toggleDarkMode())}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Botonsito>
    </Card>
  );
};

const Heroe = () => (
    <ThemeCard />
);

export default Heroe;