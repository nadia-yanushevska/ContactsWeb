import { useSelector } from 'react-redux';
import { selectError } from '../../redux/contacts/selectors';
import { selectFilteredContacts } from '../../redux/selectors';

import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import Notification from '../Notification/Notification';

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
