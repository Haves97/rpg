import { SettingsOutlined as SettingsOutlinedIcon } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { sxBox, sxIconButton } from './styleButtonSettings';


const ButtonSettings = ({ isOpen, handleClick }) => {
    return (
        <Box sx={sxBox()}>
            <Tooltip title="Настройки">
                <IconButton
                    onClick={handleClick}
                    size='medium'
                    sx={sxIconButton()}
                    aria-controls={isOpen ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isOpen ? 'true' : undefined}
                >
                    <SettingsOutlinedIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default ButtonSettings;