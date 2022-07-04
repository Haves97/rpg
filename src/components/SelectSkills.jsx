import { Grid, Typography } from '@mui/material';
import React from 'react';
import ListSkills from './ListSkills';


const SelectSkills = ({
    baseParameters,
    force,
    setForce,
    dexterity,
    setDexterity,
    intellect,
    setIntellect,
    charisma,
    setCharisma
}) => {
    return (
        <div>
            <Typography sx={{ textAlign: 'center' }} variant="body1">Навыки</Typography>
            <Typography variant="caption">Каждый скилл привязан к базовому параметру. Уровень скилла не может быть выше, чем значение базового параметра. Например, если сила = 3, Уровень атаки не может подняться выше 3. Максимальный уровень навыка 5</Typography>
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
                <ListSkills
                    title={'Сила'}
                    countPointBaseCharacteristics={baseParameters[0].value}
                    listSkills={force}
                    setListSkills={setForce}
                />
                <ListSkills
                    title={'Ловкость'}
                    countPointBaseCharacteristics={baseParameters[1].value}
                    listSkills={dexterity}
                    setListSkills={setDexterity}
                />
                <ListSkills
                    title={'Интеллект'}
                    countPointBaseCharacteristics={baseParameters[2].value}
                    listSkills={intellect}
                    setListSkills={setIntellect}
                />
                <ListSkills
                    title={'Харизма'}
                    countPointBaseCharacteristics={baseParameters[3].value}
                    listSkills={charisma}
                    setListSkills={setCharisma}
                />
            </Grid>

        </div>
    );
};

export default SelectSkills;