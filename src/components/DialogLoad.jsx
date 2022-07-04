import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { isLoadData } from '../utils/loadDataApp'
import React from 'react';

const DialogLoad = ({ title, content, open, setOpen, setOpenOk, setOpenTitleOk, setStrOnload }) => {
    const handleClose = () => setOpen(false);
    const handleLoad = () => {
        setOpen(false);
        if (!isLoadData()) {
            setOpenTitleOk('Сохраненных данных не имеется');
            setStrOnload('standart');
        } else {
            setOpenTitleOk('Данные успешно загружены! Для продолжения нажмите "Запустить игру"');
            setStrOnload('load');
        }
        setOpenOk(true)
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={handleLoad}>Загрузить</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DialogLoad;