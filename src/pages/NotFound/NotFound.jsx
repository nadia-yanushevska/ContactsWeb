import { Link } from 'react-router-dom';
import s from './NotFound.module.css';

function NotFound() {
    return (
        <div className={s.div}>
            <h1>404 Error</h1>
            <Link to="/" className={s.link}>
                Go to Home
            </Link>
        </div>
    );
}

export default NotFound;
