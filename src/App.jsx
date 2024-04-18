import './App.css';
import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { fetchContacts } from './redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const LogIn = lazy(() => import('./pages/LogIn/LogIn'));
const Register = lazy(() => import('./pages/Register/Register'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const Layout = lazy(() => import('./components/Layout/Layout'));

function App() {
    //TODO Loading lazy
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <Suspense fallback={<Loader></Loader>}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Route>
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Suspense>
    );
}

export default App;
