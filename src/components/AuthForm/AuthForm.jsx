import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { loginThunk, registerThunk } from '../../redux/auth/operations';
import s from './AuthForm.module.css';

import CustomForm from '../CustomForm/CustomForm';
import CustomInput from '../CustomInput/CustomInput';
import Button from '../Button/Button';
import Notification from '../Notification/Notification';

function AuthForm({ formType = 'login' }) {
    const dispatch = useDispatch();

    function onSubmit(values) {
        dispatch(formType === 'register' ? registerThunk(values) : loginThunk(values))
            .unwrap()
            .then(() => {
                toast.success(formType === 'register' ? 'Successful registration!' : 'Successful login !');
            })
            .catch(() => {
                toast.error('Invalid input!');
            });
    }

    const initialValues = {
        ...(formType === 'register' && { name: '' }),
        email: '',
        password: '',
    };

    const authSchema = Yup.object().shape({
        ...(formType === 'register' && { name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required') }),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(5, 'Too short').required('Required'),
    });

    return (
        <div className={s.form_wrapper}>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={authSchema}>
                <CustomForm>
                    {formType === 'register' && <CustomInput customInputType="name">Enter your name</CustomInput>}
                    <CustomInput customInputType="email">Enter your email</CustomInput>
                    <CustomInput customInputType="password" type="password">
                        Enter your password
                    </CustomInput>
                    <Button type="submit">{formType}</Button>
                </CustomForm>
            </Formik>
            <Notification>
                You {formType === 'register' ? 'already have an account?' : "don't have an account?"}{' '}
                <Link className={s.link} to={formType === 'register' ? '/login' : '/register'}>
                    {formType === 'register' ? 'Login' : 'Register'}
                </Link>
            </Notification>
        </div>
    );
}

export default AuthForm;
