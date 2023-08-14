import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  contactInfo: Yup.string().required('Contact info is required'),
  typeOfPet: Yup.string().required('Type of pet is required'),
  PetName: Yup.string().required('Pet name is required'),
  
});

function AdoptionForm({ onSubmit }) {
  const initialValues = {
    firstName: '',
    lastName: '',
    contactInfo: '',
    typeOfPet: '',
    PetName:''

    
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
      <Form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <Field type="text" id="firstName" name="firstName" />
          <ErrorMessage name="firstName" component="div" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" id="lastName" name="lastName" />
          <ErrorMessage name="lastName" component="div" />
        </div>
        <div>
          <label htmlFor="contactInfo">Contact Info:</label>
          <Field type="text" id="contactInfo" name="contactInfo" />
          <ErrorMessage name="contactInfo" component="div" />
        </div>

        <div>
            <label htmlFor="typeOfPet">Type of Pet</label>
            <Field type="text" id="typeOfPet" name="typeOfPet" />
            <ErrorMessage name="typeOfPet" component="div" />
          </div>

          <div>
            <label htmlFor="PetName">Pet Name</label>
            <Field type="text" id="PetName" name="PetName" />
            <ErrorMessage name="PetName" component="div" />
          </div>
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default AdoptionForm;
