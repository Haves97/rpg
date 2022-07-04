import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const DialogManual = ({ title, content, textButton, open, setOpen }) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Dialog
                open={open}
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
                    <Button onClick={handleClose}>{textButton}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DialogManual;