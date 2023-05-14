import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { CardContainer, CardNote, CardStyled, CardText } from './CardStyles';
import { FiDelete } from 'react-icons/fi'


const Card = (props) => {
  const isActive = props.show;
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  const [error, setError] =useState("Escribe tu nota 👾")

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    if (note.trim() !== '') {
      setError("Escribe tu nota 👾")
      const newNote = {
        id: Date.now(),
        content: note
      };
      setNotes([...notes, newNote]);
      setNote('');
    } else {
      setError("Intenta con 'agarrar la pala'");
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      handleAddNote();
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleDeleteAllNotes = () => {
    setNotes([]);
    console.log(note);
  };

  return (
    <div>
      {isActive && (
        <CardContainer>
          <CardStyled>
            <CardText>JUST DO LIST ✅ </CardText>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 2, width: 300 }
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                onKeyDown={handleKeyDown}
                id="outlined-basic"
                label={error}
                variant="outlined"
                value={note}
                onChange={handleNoteChange}
              />
            </Box>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" onClick={handleAddNote}>
                Agregar nota
              </Button>
              <Button onClick={handleDeleteAllNotes}>Eliminar todas</Button>
            </Stack>
            {notes.map((note) => {
              return (
                <CardNote key={note.id}>
                  <h1>{note.content}</h1>
                  <button onClick={() => handleDeleteNote(note.id)}><FiDelete size={30} color='tomato' /></button>
                </CardNote>
              );
            })}
          </CardStyled>
        </CardContainer>
      )}
    </div>
  );
};

export default Card;