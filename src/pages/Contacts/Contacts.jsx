import s from './Contacts.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

function Contacts() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </>
    );
}

export default Contacts;
