import s from './ModalImgCard.module.css';

function Modal({ children }) {
    return <div className={s.card}>{{ children }}</div>;
}

export default Modal;
