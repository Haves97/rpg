import { TextField } from '@mui/material';
import React from 'react';

const PersonName = ({ namePerson, setNamePerson }) => {
    return (
        <TextField
            id="standard-basic"
            variant="standard"
            placeholder='Введите имя'
            size="small"
            sx={{
                '.MuiInput-input': {
                    textAlign: 'center'
                }
            }}
            value={namePerson}
            onChange={event => setNamePerson(event.target.value)}
        />
    );
};

export default PersonName;