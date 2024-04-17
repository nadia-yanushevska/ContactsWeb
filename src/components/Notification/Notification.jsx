import s from './Notification.module.css';

function Notification({children}) {
    return (
        <div className={s.container}>
            <p>{children}</p>
        </div>
    );
}

export default Notification;
