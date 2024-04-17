import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import Navbar from '../Navbar/Navbar';

function Layout() {
    return (
        <div className={s.div}>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;
