import s from './Button.module.css';

function Button({ children, onClick = () => {}, type }) {
    return (
        <button type={type} className={s.btn} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
