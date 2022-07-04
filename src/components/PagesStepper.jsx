import { useTheme } from '@emotion/react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button, MobileStepper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const PagesStepper = ({ currentPage, setCurrentPage, nextLink = null, prevLink = null }) => {
    const theme = useTheme();
    let router = useNavigate();

    const handleNext = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        if (nextLink !== null) {
            router(nextLink)
        }
    };

    const handleBack = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
        if (prevLink !== null) {
            router(prevLink)
        }
    };

    return (
        <MobileStepper
            variant="dots"
            steps={4}
            position="static"
            activeStep={currentPage}
            sx={{
                '&.MuiMobileStepper-root': {
                    backgroundColor: '#e6e6e6',
                },
            }}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={currentPage === 3}>
                    Далее
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={currentPage === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Назад
                </Button>
            }
        />
    );
}

export default PagesStepper;