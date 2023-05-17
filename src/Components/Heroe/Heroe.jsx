import React from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux'; // Agrega el import de Provider
import styled from 'styled-components';
import { toggleDarkMode } from '../../redux/Theme/ThemeSlice';
import store from '../../redux/store'; // Importa el store de Redux

const Card = styled.div`
  background-color: ${(props) => (props.darkMode ? '#333' : '#f5f5f5')};
  color: ${(props) => (props.darkMode ? '#f5f5f5' : '#333')};
  padding: 20px;
  border-radius: 8px;
`;

const Botonsito = styled.button`
  background-color: ${(props) => (props.darkMode ? '#f5f5f5' : '#333')};
  color: ${(props) => (props.darkMode ? '#333' : '#f5f5f5')};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

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
  <Provider store={store}>
    <ThemeCard />
  </Provider>
);

export default Heroe;