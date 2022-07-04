import { Divider, Grid } from '@mui/material';
import React, { useState } from 'react';
import DialogManual from '../components/DialogManual';
import Hero from '../components/Hero';
import PagesStepper from '../components/PagesStepper';
import Settings from '../components/Settings/Settings';

const Play = ({
    namePerson,
    currentPage,
    setCurrentPage,
    force,
    dexterity,
    intellect,
    charisma,
    baseParameters,
    saveParamSkills
}) => {
    const isSkillNull = (param) => param.filter(p => p.value !== 0);
    const allChooseSkills = [
        ...isSkillNull(force),
        ...isSkillNull(dexterity),
        ...isSkillNull(intellect),
        ...isSkillNull(charisma),
    ]
    const [finalParameters, setFinalParameters] = useState([
        { key: 'vitalForces', name: 'Жизненные силы', value: baseParameters[0].value + 3 },
        { key: 'evasion', name: 'Уклонение', value: baseParameters[1].value + 10 },
        { key: 'energy', name: 'Энергичность', value: baseParameters[2].value + baseParameters[1].value },
    ])

    const [botParameters, setBotParameters] = useState([
        { key: 'vitalForces', name: 'Жизненные силы', value: baseParameters[0].value + baseParameters[1].value },
        { key: 'evasion', name: 'Уклонение', value: baseParameters[1].value + 5 },
        { key: 'energy', name: 'Энергичность', value: baseParameters[2].value + baseParameters[3].value },
    ])

    const [botSkills, setBotSkills] = useState([
        { key: 'thunderclap', name: 'громовой удар', value: 1 },
        { key: 'cascade', name: 'каскад', value: 2 },
        { key: 'stabback', name: 'удар в спину', value: 3 },
    ]);

    const [openDialog, setOpenDialog] = useState(true);

    return (
        <div>
            <DialogManual
                title={"Описание"}
                content={"Имитация игры. Когда вы нажимаете на навык, то другому игроку наносится урон равный уровню навыка. Вы можете нажимать на навыки в любом порядке любого игрока. Когда \"Жизненные силы\" игрока опускаются до 0, то игра заканчивается. Для перехода к началу игры нажмите на кнопку \"Ознакомлен(а)\""}
                textButton={"Ознакомлен(а)"}
                open={openDialog}
                setOpen={setOpenDialog}
            />
            <Settings
                saveParamSkills={saveParamSkills}
                namePage={'play'}
                force={force}
                dexterity={dexterity}
                intellect={intellect}
                charisma={charisma}
                namePerson={namePerson}
                baseParameters={baseParameters}
            />
            <Divider sx={{ marginBottom: '0.5rem' }} />
            <Grid container spacing={3}>
                <Grid sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                    item
                    xs={6}
                >
                    <Hero
                        namePerson={namePerson}
                        skillSet={allChooseSkills}
                        playerParametr={finalParameters}
                        setPlayerParametr={setBotParameters}
                        anotherPlayer={botParameters}
                    />
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    item
                    xs
                >
                    <Hero
                        namePerson={'Компьютер'}
                        skillSet={botSkills}
                        playerParametr={botParameters}
                        setPlayerParametr={setFinalParameters}
                        anotherPlayer={finalParameters}
                    />
                </Grid>
            </Grid>
            <PagesStepper
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                prevLink={'/skills/'}
            />
        </div>
    );
};

export default Play;