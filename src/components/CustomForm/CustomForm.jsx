import { Form } from 'formik'
import s from './CustomForm.module.css'

function CustomForm({children}) {
  return (
    <Form className={s.form}>
      {children}
    </Form>
  )
}

export default CustomForm
