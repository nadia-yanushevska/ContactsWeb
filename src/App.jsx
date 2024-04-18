import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { reloadThunk } from './redux/auth/operations';
import { getToastStyles } from './helpers/helpers';
import './App.css';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const LogIn = lazy(() => import('./pages/LogIn/LogIn'));
const Register = lazy(() => import('./pages/Register/Register'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const Layout = lazy(() => import('./components/Layout/Layout'));

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(reloadThunk());
    }, [dispatch]);

    return (
        <Suspense fallback={<Loader></Loader>}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute>
                                <Contacts />
                            </PrivateRoute>
                        }
                    />
                </Route>
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <LogIn />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    }
                />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>

            <div className="toast_container">
                <Toaster {...getToastStyles()} />
            </div>
        </Suspense>
    );
}

export default App;
