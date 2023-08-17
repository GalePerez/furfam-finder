import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../style/contact-us.css"

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

function ContactUs() {
  return (
    <div className='body'>
      <h2 className='contact-us-title'>Contact Us</h2>
      <p>Have questions or feedback? We'd love to hear from you!</p>
      <section className='form'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          <Form>
            <label htmlFor="name" className='form-label'>Name:</label>
            <Field
              type="text"
              id="name"
              className='form-control'
              name="name"
            />
            <ErrorMessage name="name" component="div" className="error" />

            <label htmlFor="email" className='form-label'>Email:</label>
            <Field
              type="email"
              id="email"
              className='form-control'
              name="email"
              placeholder='name@example.com'
            />
            <ErrorMessage name="email" component="div" className="error" />

            <label htmlFor="message" className='form-label'>Message:</label>
            <Field
              as="textarea"
              id="message"
              className='form-control'
              name="message"
              rows={3}
            />
            <ErrorMessage name="message" component="div" className="error" />

            <div className='button'>
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </section>
    </div>
  );
}

export default ContactUs;
