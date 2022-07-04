export const saveParamSkills = (dataSave) => {
    console.log(`${JSON.stringify(dataSave)} сохранить`);
    localStorage.clear();

    localStorage.setItem('baseParameters', JSON.stringify(dataSave.baseParameters));
    localStorage.setItem('namePerson', dataSave.namePerson);

    if (dataSave.namePage === 'skills' || dataSave.namePage === 'play') {
        localStorage.setItem('force', JSON.stringify(dataSave.force));
        localStorage.setItem('dexterity', JSON.stringify(dataSave.dexterity));
        localStorage.setItem('intellect', JSON.stringify(dataSave.intellect));
        localStorage.setItem('charisma', JSON.stringify(dataSave.charisma));
    }
}