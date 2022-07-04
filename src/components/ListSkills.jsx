import React, { useState } from 'react';
import GridRow from './GridRow';
import TitleListSkills from './TitleListSkills';

const ListSkills = ({ title, countPointBaseCharacteristics, listSkills, setListSkills }) => {
    const countUsePointSkills = listSkills.reduce(
        (accumulator, currentValue) => accumulator + currentValue.value,
        0
    );
    const [countPointSkill, setCountPointSkill] = useState(countPointBaseCharacteristics - countUsePointSkills);
    return (
        <>
            <TitleListSkills title={title} />
            {listSkills.map((list, index) =>
                <GridRow
                    countPoints={countPointSkill}
                    setCountPoints={setCountPointSkill}
                    name={list.name}
                    setParameters={setListSkills}
                    maxCountPointSkills={countPointBaseCharacteristics}
                    targetIndex={index}
                    limiter={5}
                    key={list.key}
                    currentValue={list.value}
                />
            )}
        </>
    );
};

export default ListSkills;