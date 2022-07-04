




export const isLoadData = () => {
    const row = localStorage.getItem('namePerson');
    return row === null ? false : true;
}

export const getNamePerson = () => {
    const row = localStorage.getItem('namePerson')
    return row === null ? '' : row;
}

export const getBaseParameters = () => [
    { key: 'force', name: 'сила', value: 0 },
    { key: 'dexterity', name: 'ловкость', value: 0 },
    { key: 'intellect', name: 'интеллект', value: 0 },
    { key: 'charisma', name: 'харизма', value: 0 },
]

export const loadData = (name, callback) => {
    const row = localStorage.getItem(name);
    const listSkills = JSON.parse(row);
    if (listSkills === null) {
        return;
    }
    callback(data => {
        data.forEach((item, index, arr) => {
            arr[index] = { ...item, value: listSkills[index].value }
        })
        return [...data];
    })
}

export const resetData = (callback) => {
    callback(data => {
        data.forEach((item, index, arr) => {
            arr[index] = { ...item, value: 0 }
        })
        return [...data];
    })
}

export const getForce = () => [
    { key: 'attack', name: 'атака', value: 0 },
]

export const getDexterity = () => [
    { key: 'stealth', name: 'стелс', value: 0 },
    { key: 'archery', name: 'стрельба из лука', value: 0 },
]

export const getIntellect = () => [
    { key: 'learnability', name: 'обучаемость', value: 0 },
    { key: 'survival', name: 'выживание', value: 0 },
    { key: 'medicine', name: 'медицина', value: 0 },
]

export const getCharisma = () => [
    { key: 'intimidation', name: 'запугивание', value: 0 },
    { key: 'insight', name: 'проницательность', value: 0 },
    { key: 'Appearance', name: 'внешний вид', value: 0 },
    { key: 'manipulation', name: 'манипулирование', value: 0 },
]

