import { Grid, Typography } from '@mui/material';
import React from 'react';
import GridRow from './GridRow';

const BaseCharacteristics = ({
    countBaseParameters,
    setCountBaseParameters,
    baseParameters,
    setBaseParameters,
    maxCountBaseParameters,
}) => {
    return (
        <div>
            <Typography sx={{ textAlign: 'center' }} variant="body1">Базовые параметры</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{
                    marginTop: '0',
                    marginLeft: '0',
                }}
            >
                <Grid container item >
                    <Grid item xs={3}>
                        <Typography variant="body2">Очков: </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography sx={{ marginLeft: '1.2rem' }} variant="body2">{countBaseParameters}</Typography>
                    </Grid>
                </Grid>
                {baseParameters.map((parameters, index) =>
                    <GridRow
                        countPoints={countBaseParameters}
                        setCountPoints={setCountBaseParameters}
                        name={parameters.name}
                        setParameters={setBaseParameters}
                        maxCountPointSkills={maxCountBaseParameters}
                        targetIndex={index}
                        key={parameters.key}
                        currentValue={parameters.value}
                    />
                )}
            </Grid>
        </div>
    );
};

export default BaseCharacteristics;