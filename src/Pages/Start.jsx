import { Divider, Grid } from '@mui/material';
import React, { useState } from 'react';
import BaseCharacteristics from '../components/BaseCharacteristics';
import PersonName from '../components/PersonName';
import Person from '../components/Person';
import Settings from '../components/Settings/Settings'
import FinalCharacteristics from '../components/FinalCharacteristics';
import PagesStepper from '../components/PagesStepper'

const Start = ({
    baseParameters,
    setBaseParameters,
    namePerson,
    setNamePerson,
    currentPage,
    setCurrentPage,
    saveParamSkills
}) => {
    const maxCountBaseParameters = 10;
    let countUsePointParameters = baseParameters.reduce(
        (accumulator, currentValue) => accumulator + currentValue.value,
        0
    );
    const [countBaseParameters, setCountBaseParameters] = useState(maxCountBaseParameters - countUsePointParameters);
    return (
        <div>
            <Settings
                saveParamSkills={saveParamSkills}
                namePage={'start'}
                baseParameters={baseParameters}
                namePerson={namePerson}
            />
            <Divider sx={{ marginBottom: '0.5rem' }} />
            <Grid container spacing={3}>
                <Grid sx={{ marginBottom: '3rem' }} item xs>
                    <BaseCharacteristics
                        countBaseParameters={countBaseParameters}
                        setCountBaseParameters={setCountBaseParameters}
                        baseParameters={baseParameters}
                        setBaseParameters={setBaseParameters}
                        maxCountBaseParameters={maxCountBaseParameters}
                    />
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    item
                    xs={4}
                >
                    <Person />
                    <PersonName
                        namePerson={namePerson}
                        setNamePerson={setNamePerson}
                    />
                </Grid>
                <Grid item xs>
                    <FinalCharacteristics
                        baseParameters={baseParameters}
                    />
                </Grid>
            </Grid>
            <PagesStepper
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                nextLink={'/skills/'}
                prevLink={'/'}
            />
        </div>
    );
};

export default Start;