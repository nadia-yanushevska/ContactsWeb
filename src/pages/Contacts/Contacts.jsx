import s from './Contacts.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

function Contacts() {
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
