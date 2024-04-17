import Contact from '../Contact/Contact';
import Notification from '../Notification/Notification';
import s from './ContactList.module.css';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { selectFilteredContacts } from '../../redux/selectors';

function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    return (
        <>
            {loading && <Loader />}
            {error && <Notification>Sorry, something went wrong!</Notification>}
            {!loading && !error && (
                <ul className={s.list}>
                    {filteredContacts.length ? (
                        [...filteredContacts].reverse().map(contact => {
                            return <Contact key={contact.id} contact={contact} />;
                        })
                    ) : (
                        <Notification>No contacts available yet.</Notification>
                    )}
                </ul>
            )}
        </>
    );
}

export default ContactList;
