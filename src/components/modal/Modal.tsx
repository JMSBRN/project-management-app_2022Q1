import styles from './Modal.module.css';
import className from 'classnames/bind';
import Button from '../button/Button';

interface IModal {
    handleClose?: () => void;
    children?: JSX.Element;
}

const cx = className.bind(styles);

const Modal = ({children, handleClose}: IModal) => {

    const classNames = cx({
        modal: true
        });
    
    return (
        <div className={styles.overlay}>
        <div className={styles.backdrop} onClick={handleClose}></div>
        <div className={classNames}>
            <div className={styles.content}>
            {children}
            </div>
            <div className={styles.actions}>
                <Button className={styles.btn} onClick={handleClose} textButton='✖' />
            </div>
        </div>
        </div>
    );
};

export default Modal;