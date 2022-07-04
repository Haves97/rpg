import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DialogManual from '../components/DialogManual';

const End = ({ setStrOnload }) => {
    const location = useLocation();
    const { namePerson } = location.state;
    const [openDialog, setOpenDialog] = useState(true);
    let router = useNavigate();
    useEffect(() => {
        if (!openDialog) {
            setStrOnload('standart');
            router('/');
        }
    }, [openDialog, setOpenDialog, router, setStrOnload])

    return (
        <div>
            <DialogManual
                title={"Игра окончена"}
                content={`${namePerson} выиграл(а)`}
                textButton={"Продолжить"}
                open={openDialog}
                setOpen={setOpenDialog}
            />
        </div>
    );
};

export default End;