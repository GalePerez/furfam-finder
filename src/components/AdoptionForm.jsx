import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../style/adoptionform.css'

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
      <Form className='form adoption-form'>
        <div>
          <label htmlFor="firstName" className='form-label'>First Name:</label>
          <Field 
            type="text" 
            id="firstName" 
            name="firstName"
            className="form-control"
            />
          <ErrorMessage name="firstName" component="div" />
        </div>
        <div>
          <label htmlFor="lastName" className='form-label'>Last Name:</label>
          <Field 
            type="text" 
            id="lastName" 
            name="lastName"
            className="form-control" 
            />
          <ErrorMessage name="lastName" component="div" />
        </div>
        <div>
          <label htmlFor="contactInfo" className='form-label'>Contact Info:</label>
          <Field 
            type="text"
            id="contactInfo" 
            name="contactInfo"
            className="form-control" 
          />
          <ErrorMessage name="contactInfo" component="div" />
        </div>

        <div>
            <label htmlFor="typeOfPet" className='form-label'>Type of Pet</label>
            <Field 
              type="text" 
              id="typeOfPet" 
              name="typeOfPet"
              className="form-control" 
            />
            <ErrorMessage name="typeOfPet" component="div" />
          </div>

          <div>
            <label htmlFor="PetName" className='form-label'>Pet Name</label>
            <Field 
              type="text" 
              id="PetName" 
              name="PetName"
              className="form-control" 
            />
            <ErrorMessage name="PetName" component="div" />
          </div>
          <div className='submit-button'>
            <button type="submit" style={{width: "7.5rem"}}>Submit</button>
          </div>

          <div className='adoption-procedure'>
            <h2 className='procedure-title'>Adoption Procedure:</h2>
            <p className='procedure'>
                -Submit the adoption application form <br/>
                -Attend the Zoom interview <br/>
                -Meet our shelter animals in person <br/>
                -Visit your chosen pet to confirm your choice <b/>
                -Wait for vet clearance and schedule pick up <b/>
                -Pay the adoption fee of P500 (cat) / P1000 (dog) <br/>
                -Take your pet home! <br/>
            </p>
          </div>
      </Form>
    </Formik>
  );
}

export default AdoptionForm;
