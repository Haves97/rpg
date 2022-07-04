import { Grid } from '@mui/material';
import React from 'react';
import SelectionParameters from './SelectionParameters';


const GridRow = ({ countPoints, setCountPoints, name, setParameters, maxCountPointSkills, currentValue, targetIndex, limiter = 0 }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            item spacing={3}
            sx={{
                marginTop: '0',
            }}
        >
            <Grid
                item
                xs={3}
                sx={{
                    '&.MuiGrid-item': {
                        paddingTop: '0'
                    }
                }}
            >
                {name}
            </Grid>
            <Grid
                sx={{
                    '&.MuiGrid-item': {
                        paddingTop: '0'
                    }
                }}
                item
                xs
            >
                <SelectionParameters
                    countPoints={countPoints}
                    setCountPoints={setCountPoints}
                    setParameters={setParameters}
                    maxCountPointSkills={maxCountPointSkills}
                    targetIndex={targetIndex}
                    limiter={limiter}
                    currentValue={currentValue}
                />
            </Grid>
        </Grid>
    );
};

export default GridRow;