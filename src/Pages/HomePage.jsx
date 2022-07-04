import { Button, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DialogLoad from '../components/DialogLoad';
import DialogManual from '../components/DialogManual';


const HomePage = ({ setCurrentPage, setStrOnload }) => {
    let router = useNavigate();
    const [open, setOpen] = useState(false);
    const [openOk, setOpenOk] = useState(false);
    const [openTitleOk, setOpenTitleOk] = useState('');
    return (
        <>
            <DialogLoad
                title={"Вы действительно хотите загрузить персонажа?"}
                content={""}
                open={open}
                setOpen={setOpen}
                setOpenOk={setOpenOk}
                setOpenTitleOk={setOpenTitleOk}
                setStrOnload={setStrOnload}
            />
            <DialogManual
                title={openTitleOk}
                content={""}
                open={openOk}
                setOpen={setOpenOk}
                textButton={"Ок"}
            />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ textAlign: 'center', paddingTop: '3rem', opacity: '0.4' }} variant="h4">Добро пожаловать!</Typography>
                    <Button
                        onClick={() => {
                            router('/start');
                            setCurrentPage(prevPage => prevPage + 1);
                        }}
                        sx={{ marginTop: '2rem' }}
                        variant="outlined"
                    >
                        Запустить игру
                    </Button>
                    <Button
                        sx={{ marginTop: '2rem' }}
                        onClick={() => setOpen(true)}
                        variant="outlined"
                    >
                        Загрузить
                    </Button>
                </Box>
            </Container >
        </>
    );
};

export default HomePage;