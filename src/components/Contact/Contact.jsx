import React from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

import { deleteContact } from '../../redux/contacts/operations';
import s from './Contact.module.css';
import Button from '../Button/Button';
import CustomModal from '../CustomModal/CustomModal';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <li className={s.item}>
                <div className={s.content} onClick={openModal}>
                    <div className={s.content_div}>
                        <IoPerson className={s.icon} size={28} />
                        {contact.name}
                    </div>
                    <div className={s.content_div}>
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

            <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal} contact={contact} />
        </>
    );
};

export default Contact;
