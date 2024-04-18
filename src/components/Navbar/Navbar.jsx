import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectIsLoggedIn, selectReload } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

import s from './Navbar.module.css';
import Button from '../Button/Button';

function Navbar() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const reload = useSelector(selectReload);

    const dispatch = useDispatch();
    return (
        <header className={s.header}>
            <ul className={s.list}>
                <li>
                    <NavLink to="/" className={s.link}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className={s.link}>
                        Contacts
                    </NavLink>
                </li>
            </ul>
            {reload || isLoggedIn ? (
                <Button
                    inverseColor={true}
                    onClick={() => {
                        dispatch(logoutThunk());
                        toast.success('Logged out successfully.');
                    }}
                >
                    LogOut
                </Button>
            ) : (
                <ul className={s.list}>
                    <li>
                        <Link to="/register" className={s.link}>
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className={s.link}>
                            Login
                        </Link>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Navbar;
