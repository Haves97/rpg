import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button, MobileStepper, useTheme } from '@mui/material';
import React, { useState, useEffect } from 'react';


const SelectionParameters = ({ countPoints, setCountPoints, setParameters, maxCountPointSkills, targetIndex, currentValue, limiter, min = 0 }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(currentValue);

    const handleNext = () => {
        if (countPoints === min) {
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setCountPoints(prevCountPoints => prevCountPoints - 1);
    };


    const handleBack = () => {
        if (countPoints === maxCountPointSkills) {
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setCountPoints(prevCountPoints => prevCountPoints + 1);
    };



    useEffect(() => {
        setParameters(prevParameters => {
            prevParameters[targetIndex] = { ...prevParameters[targetIndex], value: activeStep }
            console.log(...prevParameters);
            return [...prevParameters];
        })
    }, [activeStep, targetIndex, setParameters])

    const isParamDisabled = () => {
        return limiter === 0 ?
            activeStep === maxCountPointSkills || countPoints === min :
            activeStep === maxCountPointSkills || countPoints === min || activeStep === limiter
    }


    return (
        <MobileStepper
            variant="progress"
            steps={maxCountPointSkills + 1}
            position="static"
            activeStep={activeStep}
            sx={{
                '&.MuiMobileStepper-root': {
                    padding: '0',
                    marginLeft: '1rem',
                    margin: '0',
                    backgroundColor: '#e6e6e6',
                    '.MuiButton-root': {
                        padding: '0',
                        minWidth: '0',
                    },
                    '.MuiLinearProgress-bar': {
                        backgroundColor: (maxCountPointSkills === 0 ? 'inherit' : '#1976d2'),
                    }
                },
            }}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={isParamDisabled()}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === min || countPoints === maxCountPointSkills}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}

                </Button>
            }
        />
    );
};

export default SelectionParameters;

