import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import Contacts from './pages/Contacts/Contacts';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Route>
                <Route path="/login" element={<LogIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </>
    );
}

export default App;
