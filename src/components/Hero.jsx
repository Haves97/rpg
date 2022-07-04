import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = ({
    namePerson,
    skillSet,
    playerParametr,
    setPlayerParametr,
    anotherPlayer
}) => {
    let router = useNavigate();

    return (
        <Container maxWidth="sm">
            <Box sx={{ bgcolor: '#cfe8fc', height: '20vh' }}>
                <Typography sx={{ textAlign: 'center', paddingTop: '3rem', opacity: '0.4' }} variant="h4">{namePerson === '' ? 'Имя не выбрано' : namePerson}</Typography>
            </Box>
            <Box sx={{ bgcolor: '#cfe8fc', padding: '0.5rem', margin: '1rem' }}>
                {playerParametr.map(param =>
                    <Typography key={param.key} sx={{ opacity: '0.7' }} variant="body2">{param.name}: {param.value} </Typography>
                )}
            </Box >
            {skillSet.map((skill) =>
                <Box key={skill.key} sx={{ margin: '1rem' }}>
                    <Button
                        sx={{ bgcolor: '#cfe8fc' }}
                        onClick={() => {

                            setPlayerParametr(prevParametrs => {
                                let result = prevParametrs[0].value - skill.value
                                prevParametrs[0] = { ...prevParametrs[0], value: result }
                                return [...prevParametrs];
                            });
                            if (anotherPlayer[0].value <= 0) {
                                console.log(`${namePerson} выиграл(а)`);
                                router('/end', { state: { namePerson } });
                            }
                        }}
                    >
                        {skill.name}(Уровень:{skill.value})
                    </Button>
                </Box>
            )
            }
        </Container >
    );
};

export default Hero;
