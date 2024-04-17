import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button';
// import s from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOps';
import CustomInput from '../CustomInput/CustomInput';
import CustomForm from '../CustomForm/CustomForm';

function ContactForm() {
    const dispatch = useDispatch();

    function onAddSubmit(values, actions) {
        dispatch(addContact(values));
        actions.resetForm();
    }

    const initialValues = {
        name: '',
        number: '',
    };
    const phoneRegExp = `^[0-9]+$`;
    const contactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
        number: Yup.string().matches(phoneRegExp, 'Must all be digits').min(7, 'Must be exactly 7 digits').max(7, 'Must be exactly 7 digits').required('Must be a valid number'),
    });

    return (
        <Formik initialValues={initialValues} onSubmit={onAddSubmit} validationSchema={contactSchema}>
            <CustomForm>
                <CustomInput customInputType="name">Jane Doe</CustomInput>
                <CustomInput customInputType="number">1234567</CustomInput>

                <Button type="submit">Add contact</Button>
            </CustomForm>
        </Formik>
    );
}

export default ContactForm;
