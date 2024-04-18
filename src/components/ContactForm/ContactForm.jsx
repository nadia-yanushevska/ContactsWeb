import * as Yup from 'yup';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import { addContact, updateContact } from '../../redux/contacts/operations';
import { capitalizeLetters, deformatNumber, formatNumber, getUpdateContact } from '../../helpers/helpers';

import CustomForm from '../CustomForm/CustomForm';
import CustomInput from '../CustomInput/CustomInput';
import Button from '../Button/Button';

function ContactForm({ contact, closeModal }) {
    const dispatch = useDispatch();

    function onAddSubmit(values, actions) {
        const formattedValues = { ...values, name: capitalizeLetters(values.name), number: formatNumber(values.number) };

        dispatch(addContact(formattedValues))
            .unwrap()
            .then(() => {
                toast.success('Contact added!');
            });
        actions.resetForm();
    }

    function onUpdateSubmit(values) {
        const formattedValues = { ...values, name: capitalizeLetters(values.name), number: formatNumber(values.number) };

        if (contact.name === formattedValues.name && contact.number === formattedValues.number) {
            toast.error('Contact unchanged.');
            closeModal();
            return;
        }

        const contactUpdate = getUpdateContact(contact, formattedValues);

        dispatch(updateContact({ id: contact.id, contactUpdate }))
            .unwrap()
            .then(() => {
                toast.success('Contact updated!');
            });
        closeModal();
    }

    const initialValues = {
        name: contact ? contact.name : '',
        number: contact ? deformatNumber(contact.number) : '',
    };
    const phoneRegExp = `^[0-9]+$`;
    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
        number: Yup.string().matches(phoneRegExp, 'Must all be digits').min(7, 'Must be exactly 7 digits').max(7, 'Must be exactly 7 digits').required('Must be a valid number'),
    });

    return (
        <Formik initialValues={initialValues} onSubmit={contact ? onUpdateSubmit : onAddSubmit} validationSchema={contactSchema}>
            <CustomForm>
                <CustomInput customInputType="name">Jane Doe</CustomInput>
                <CustomInput customInputType="number">1234567</CustomInput>

                <Button type="submit">{contact ? 'Update' : 'Add'} contact</Button>
            </CustomForm>
        </Formik>
    );
}

export default ContactForm;
