import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CardContainer, CardNote, CardStyled, CardText } from './CardStyles';
import { FiDelete } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { incrementCounter } from '../../redux/Theme/ThemeSlice';

const Card = (props) => {
  const isActive = props.show;
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');
  const [notesCount, setNotesCount] = useState(0); // Estado para el contador de notas
  const darkMode = useSelector((state) => state.theme.darkMode);

  const storedNotes = localStorage.getItem('notes');

  const dispatchsito = useDispatch();

  const handleIncrementCounter = (newValue) => {
    dispatchsito(incrementCounter(newValue));
  };
  useEffect(() => {
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
      handleIncrementCounter(JSON.parse(storedNotes).length) 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    setNotesCount(notes.length); // Actualizar el estado del contador de notas
  }, [notes]);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    if (note.trim() !== '') {
      const newNote = {
        id: Date.now(),
        content: note,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setNote('');
      handleIncrementCounter(notesCount + 1) 
    } else {
      alert('Intenta escribir algo');
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleAddNote();
      setNotesCount()
    }
  };

  const handleDeleteNote = (id) => {
    if (window.confirm('¿Desea borrar esta nota?')) {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      handleIncrementCounter(notesCount -1)
    }
  };

  const handleDeleteAllNotes = () => {
    if (window.confirm('¿Desea borrar todas las notas?')) {
      setNotes([]);
      handleIncrementCounter(0)
    }

  };

  return (
    <CardContainer darkMode={darkMode} active={isActive}>
      <CardStyled darkMode={darkMode}>
        <CardText darkMode={darkMode}>JUST DO LIST ✅ </CardText>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 2, width: 300 },
          }}
          noValidate
          autoComplete="off"
        >
          <input
            type="text"
            onKeyDown={handleKeyDown}
            onChange={handleNoteChange}
            value={note}
            placeholder="Agrega una nota"
          />
        </Box>
        <Stack direction="row" spacing={2}>
          <Button color={darkMode ? 'error' : 'primary'} variant="contained" onClick={handleAddNote}>
            Agregar nota
          </Button>
          {notes.length > 0 && (
            <Button color={darkMode ? 'error' : 'primary'} onClick={handleDeleteAllNotes}>
              Eliminar todas
            </Button>
          )}
        </Stack>
        {notes.map((note) => {
          return (
            <CardNote darkMode={darkMode} key={note.id}>
              <h1>{note.content}</h1>
              <button onClick={() => handleDeleteNote(note.id)}>
                <FiDelete size={30} color="tomato" />
              </button>
            </CardNote>
          );
        })}
      </CardStyled>
    </CardContainer>
  );
};

export default Card;
