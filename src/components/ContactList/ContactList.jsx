import Contact from '../Contact/Contact';
import Notification from '../Notification/Notification';
import s from './ContactList.module.css';
import { selectError } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

function ContactList() {
    const filteredContacts = useSelector(selectFilteredContacts);
    const error = useSelector(selectError);

    return (
        <>
            {error && <Notification>Oops, something went wrong!</Notification>}
            {!error &&
                (filteredContacts.length > 0 ? (
                    <ul className={s.list}>
                        {[...filteredContacts].reverse().map(contact => {
                            return <Contact key={contact.id} contact={contact} />;
                        })}
                    </ul>
                ) : (
                    <Notification>No contacts available yet.</Notification>
                ))}
        </>
    );
}

export default ContactList;
