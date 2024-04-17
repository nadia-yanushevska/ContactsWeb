import { ErrorMessage, Field } from 'formik';
import s from './CustomInput.module.css';

function CustomInput({ customInputType = 'value', type = 'text', children }) {
    return (
        <div className={s.input_container}>
            <Field type={type} name={customInputType} className={s.input} placeholder={children} />
            <ErrorMessage name={customInputType} component="span" className={s.error} />
        </div>
    );
}

export default CustomInput;
