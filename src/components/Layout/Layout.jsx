import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';
import Navbar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';

function Layout() {
    return (
        <div className={s.div}>
            <Navbar />

            <Suspense fallback={<Loader></Loader>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default Layout;
