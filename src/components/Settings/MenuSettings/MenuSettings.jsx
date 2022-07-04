import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import DialogManual from "../../DialogManual";
import DialogSave from "../../DialogSave";
import { paperProps } from "./styleMenuSettings"


const MenuSettings = ({ anchorEl, handleClose, saveParamSkills, dataSave }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openDialogOk, setOpenDialogOk] = useState(false);
    return (
        <>
            <DialogSave
                title={"Подтверждение"}
                content={"Вы уверены, что хотите сохранить данные?"}
                open={openDialog}
                setOpen={setOpenDialog}
                saveParamSkills={saveParamSkills}
                dataSave={dataSave}
                setOpenDialogOk={setOpenDialogOk}
            />
            <DialogManual
                title={"Данные успешно сохранены!"}
                content={""}
                open={openDialogOk}
                setOpen={setOpenDialogOk}
                textButton={"Ок"}
            />
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={paperProps()}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem
                    onClick={() => setOpenDialog(true)}
                >
                    Сохранить данные
                </MenuItem>
            </Menu>
        </>
    );
};

export default MenuSettings;