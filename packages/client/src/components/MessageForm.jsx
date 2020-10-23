import React from 'react';
import { Field, Form, Formik } from 'formik';

function MessageForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {formik => (
        <Form id="messageForm">
          <Field name="message" />
          <button type="submit">send message</button>
        </Form>
      )}
    </Formik>
  );
}

export default MessageForm;