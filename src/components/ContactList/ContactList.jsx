import Contact from '../Contact/Contact';
import Notification from '../Notification/Notification';
import s from './ContactList.module.css';
import { selectError, selectFilteredContacts, selectLoading } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';

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
