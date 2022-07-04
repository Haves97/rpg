import { Box, Typography } from '@mui/material';
import React from 'react';

const FinalCharacteristics = ({ baseParameters }) => {
    return (
        <div>
            <Typography sx={{ textAlign: 'center' }} variant="body1">Итоговые параметры</Typography>
            <Box>
                <Typography variant="body2">Жизненные силы: {baseParameters[0].value + 3} </Typography>
                <Typography variant="body2">Уклонение: {baseParameters[1].value + 10} </Typography>
                <Typography variant="body2">Энергичность: {baseParameters[2].value + baseParameters[1].value} </Typography>
            </Box>
        </div>
    );
};

export default FinalCharacteristics;