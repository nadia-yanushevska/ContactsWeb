import { useDispatch } from 'react-redux';
import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

import { deleteContact, updateContact } from '../../redux/contacts/operations';
import Button from '../Button/Button';
import s from './Contact.module.css';
import { capitalizeLetters, containsOnlyDigits, deformatNumber, formatNumber } from '../../helpers/helpers';
import toast from 'react-hot-toast';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    function handleNameUpdate() {
        const newName = prompt('Enter updated name:', `${contact.name}`).trim();
        if (!newName) return;
        if (newName.length >= 3) dispatch(updateContact({ id: contact.id, contactUpdate: { name: capitalizeLetters(newName) } }));
        else toast.error('Invalid name!');
    }

    function handleNumberUpdate() {
        const newNumber = prompt('Enter updated number (must be exactly 7 digits):', `${deformatNumber(contact.number)}`);
        if (!newNumber) return;
        if (containsOnlyDigits(newNumber) && newNumber.length === 7) dispatch(updateContact({ id: contact.id, contactUpdate: { number: formatNumber(newNumber) } }));
        else toast.error('Invalid number!');
    }

    return (
        <li className={s.item}>
            <div className={s.content}>
                <div className={s.content_div} onClick={handleNameUpdate}>
                    <IoPerson className={s.icon} size={28} />
                    {contact.name}
                </div>
                <div className={s.content_div} onClick={handleNumberUpdate}>
                    <FaPhone className={s.icon} size={28} />
                    {contact.number}
                </div>
            </div>
            <Button
                type="button"
                onClick={() => {
                    toast.error('Contact deleted!');
                    dispatch(deleteContact(contact.id));
                }}
            >
                Delete
            </Button>
        </li>
    );
};

export default Contact;
