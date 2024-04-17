import { clsx } from 'clsx';
import s from './Button.module.css';

function Button({ children, onClick = () => {}, type, inverseColor = false }) {
    return (
        <button type={type} className={inverseColor ? clsx(s.btn, s.btn_inverse) : s.btn} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
