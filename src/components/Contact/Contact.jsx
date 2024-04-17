import { useDispatch } from 'react-redux';
import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

import { deleteContact } from '../../redux/contacts/operations';
import Button from '../Button/Button';
import s from './Contact.module.css';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <li className={s.item}>
            <div className={s.content}>
                <div className={s.content_div}>
                    <IoPerson className={s.icon} size={28} />
                    {contact.name}
                </div>
                <div className={s.content_div}>
                    <FaPhone className={s.icon} size={28} />
                    {contact.number}
                </div>
            </div>
            <Button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
            </Button>
        </li>
    );
};

export default Contact;
