import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button';
import s from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOps';

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
            <Form className={s.form}>
                <div className={s.input_container}>
                    <Field type="text" name="name" className={s.input} placeholder="Jane Doe" />
                    <ErrorMessage name="name" component="span" className={s.error} />
                </div>
                <div className={s.input_container}>
                    <Field type="text" name="number" className={s.input} placeholder="1234567" />
                    <ErrorMessage name="number" component="span" className={s.error} />
                </div>
                <Button type="submit">Add contact</Button>
            </Form>
        </Formik>
    );
}

export default ContactForm;
