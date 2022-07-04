import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import End from '../Pages/End';
import HomePage from '../Pages/HomePage';
import Play from '../Pages/Play';
import Skills from '../Pages/Skills';
import Start from '../Pages/Start';
import { saveParamSkills } from '../utils/saveDataApp'
import {
    getBaseParameters,
    getNamePerson,
    getForce,
    getDexterity,
    getIntellect,
    getCharisma,
    loadData,
    resetData
} from '../utils/loadDataApp'

const AppRouter = () => {
    const [strOnload, setStrOnload] = useState('standart');

    const [baseParameters, setBaseParameters] = useState(getBaseParameters());
    const [namePerson, setNamePerson] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [force, setForce] = useState(getForce())
    const [dexterity, setDexterity] = useState(getDexterity());
    const [intellect, setIntellect] = useState(getIntellect());
    const [charisma, setCharisma] = useState(getCharisma());

    useEffect(() => {
        if (strOnload === 'load') {
            loadData('baseParameters', setBaseParameters);
            loadData('force', setForce);
            loadData('dexterity', setDexterity);
            loadData('intellect', setIntellect);
            loadData('charisma', setCharisma);
            setNamePerson(getNamePerson());
        }
        if (strOnload === 'standart') {
            resetData(setBaseParameters);
            resetData(setForce);
            resetData(setDexterity);
            resetData(setIntellect);
            resetData(setCharisma);
            setNamePerson('');
        }
    }, [strOnload]);

    return (
        <Routes>
            <Route path="/" element={
                <HomePage
                    setCurrentPage={setCurrentPage}
                    setStrOnload={setStrOnload}
                />
            } />
            <Route path="/start" element={
                <Start
                    baseParameters={baseParameters}
                    setBaseParameters={setBaseParameters}
                    namePerson={namePerson}
                    setNamePerson={setNamePerson}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    saveParamSkills={saveParamSkills}
                />
            } />
            <Route path="/skills" element={
                <Skills
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    baseParameters={baseParameters}
                    force={force}
                    setForce={setForce}
                    dexterity={dexterity}
                    setDexterity={setDexterity}
                    intellect={intellect}
                    setIntellect={setIntellect}
                    charisma={charisma}
                    setCharisma={setCharisma}
                    saveParamSkills={saveParamSkills}
                    namePerson={namePerson}
                />
            }
            />
            <Route path="/play" element={
                <Play
                    namePerson={namePerson}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    force={force}
                    dexterity={dexterity}
                    intellect={intellect}
                    charisma={charisma}
                    baseParameters={baseParameters}
                    saveParamSkills={saveParamSkills}
                />
            }
            />
            <Route path="/end" element={
                <End
                    setStrOnload={setStrOnload}
                />
            }
            />
        </Routes>
    );
};

export default AppRouter;