import React, { useState } from 'react';
import ButtonSettings from './ButtonSettings/ButtonSettings';
import MenuSettings from './MenuSettings/MenuSettings';

const Settings = ({ saveParamSkills, ...dataSave }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <ButtonSettings isOpen={Boolean(anchorEl)} handleClick={handleClick} />
            <MenuSettings
                anchorEl={anchorEl}
                handleClose={handleClose}
                saveParamSkills={saveParamSkills}
                dataSave={dataSave}
            />
        </>
    );
};

export default Settings;