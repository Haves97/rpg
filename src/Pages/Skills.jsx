import Settings from '../components/Settings/Settings'
import { Divider, Grid } from "@mui/material";
import PagesStepper from "../components/PagesStepper";
import ShowBaseCharacteristics from '../components/ShowBaseCharacteristics';
import SelectSkills from '../components/SelectSkills';



const Skills = ({
    baseParameters,
    currentPage,
    setCurrentPage,
    force,
    setForce,
    dexterity,
    setDexterity,
    intellect,
    setIntellect,
    charisma,
    setCharisma,
    saveParamSkills,
    namePerson
}) => {
    return (
        <div>
            <Settings
                saveParamSkills={saveParamSkills}
                namePage={'skills'}
                force={force}
                dexterity={dexterity}
                intellect={intellect}
                charisma={charisma}
                namePerson={namePerson}
                baseParameters={baseParameters}
            />
            <Divider sx={{ marginBottom: '0.5rem' }} />
            <Grid sx={{ paddingBottom: '2rem' }} container spacing={3}>
                <Grid item xs={3}>
                    <ShowBaseCharacteristics
                        baseParameters={baseParameters}
                    />
                </Grid>
                <Grid item xs={7}>
                    <SelectSkills
                        baseParameters={baseParameters}
                        force={force}
                        setForce={setForce}
                        dexterity={dexterity}
                        setDexterity={setDexterity}
                        intellect={intellect}
                        setIntellect={setIntellect}
                        charisma={charisma}
                        setCharisma={setCharisma}
                    />
                </Grid>
                <Grid item xs></Grid>
            </Grid>
            <PagesStepper
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                prevLink={'/start/'}
                nextLink={'/play/'}
            />
        </div>
    );
};

export default Skills;