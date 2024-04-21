import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

export default function Modal({ children, onClose }) {
    const navigate = useNavigate();

    function closeHandler() {
        navigate('..');
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler} />
            <dialog open={true} className={classes.modal} >
                {children}
            </dialog>
        </>
    );
}