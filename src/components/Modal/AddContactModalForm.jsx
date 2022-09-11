import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as yup from 'yup';
// import PropTypes from 'prop-types';

import s from './Modal.module.scss';

const schema = yup.object().shape({
  contactName: yup.string().required('Please enter the contact name'),
});

const initialValues = {
  contactName: '',
};
// прокинуть значение инпута чтобы использовать при сабмите
export const AddContactModalForm = ({ handleSubmit, onClose }) => {
  return (
    <div className={s.formFieldsWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.fieldWrapper}>
            <Field
              className={s.input}
              id="contactName"
              name="contactName"
              placeholder="Enter contact name"
              autoComplete="off"
            />
            <ErrorMessage
              className={s.errorMessage}
              name="contactName"
              component="div"
            />
          </div>
          {/* <div className={s.fieldWrapper}>
            <Field className={s.input} as="file" id="avatar" name="avatar" />
            <ErrorMessage
              className={s.errorMessage}
              name="currency"
              component="div"
            />
          </div> */}

          <div className={s.buttonsWrapper}>
            <button className={s.formBtn} type="submit">
              Add Contact
            </button>
            <button
              className={`${s.formBtn} ${s.cancelBtn}`}
              type="reset"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
