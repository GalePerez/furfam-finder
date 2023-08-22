import React, { useEffect, useState } from 'react';
import AdminContainer from '../../components/AdminContainer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPet } from '../../store/addPetActions';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  species: Yup.string().required('Species is required'),
  name: Yup.string().required('Name is required'),
  breed: Yup.string().required('Breed is required'),
  birthday: Yup.string(),
  gender: Yup.string(),
  size: Yup.string(),
  description: Yup.string(),
  availability_status: Yup.string(),
  image: Yup.mixed().required('Image is required'),
});

function AdminPetList() {
  const dispatch = useDispatch()
  const [petData, setPetData] = useState([])
  const [newPet, setNewPet] = useState({
    species: '',
    image: 'null',
    name: '',
    breed: '',
    birthday: '',
    gender: '',
    size: '',
    description: '',
    availability_status: '',
  })

  const fetchAdminPets = async () => {
    try {
      const res = await axios('http://localhost:8000/api/v1/pets');
      dispatch(setPetData(res.data.data));
      console.log(res.data.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'image') {
      setNewPet((prevPet) => ({ ...prevPet, image: files[0] }));
    } else {
      setNewPet((prevPet) => ({ ...prevPet, [name]: value }));
    }
  };

  const handleAddPet = async (newPet) => {
    try {
      // const formData = new FormData();
      // for (const key in newPet) {
      //   formData.append(key, newPet[key]);
      // }
      const res = await axios.post('http://localhost:8000/api/v1/pets', {
        species: newPet.species,
        name: newPet.name,
        breed: newPet.breed,
        birthday: newPet.birthday,
        gender: newPet.gender,
        size: newPet.size,
        description: newPet.description,
        availability_status: newPet.availability_status,
        image: newPet.image,
        shelter_id: 1
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      dispatch(addPet(newPet))
      setNewPet({
        species: '',
        name: '',
        breed: '',
        birthday: '',
        gender: '',
        size: '',
        description: '',
        availability_status: '',
        image: null,
      });
      alert('Pet added successfully!');
    } catch (error) {
      // Display error message to the user
      alert('Error adding pet. Please try again later.');
    }
  };

    const handleDeletePet = async  (value) => {
      try {
        await axios.delete(`http://localhost:8000/api/v1/pets/${value}`);
      } catch (error) {
      }
    }
  

  useEffect(() => {
    fetchAdminPets()
  }, [])
  

  
  return ( 
  <>
  <main className="border d-flex flex-column">
    <AdminContainer>

      <div>
        <h3>Pet List</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Species</th>
              <th>Name</th>
              <th>Breed</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Size</th>
              <th>Description</th>
              <th>Availability Status</th>
              <th>Image</th>
              <th>Shelter ID</th>
            </tr>
          </thead>
          <tbody>
            {petData.map((pet) => (
              <tr key={pet.id}>
                <td>{pet.id}</td>
                <td>{pet.species}</td>
                <td>{pet.name}</td>
                <td>{pet.breed}</td>
                <td>{pet.birthday}</td>
                <td>{pet.gender}</td>
                <td>{pet.size}</td>
                <td>{pet.description}</td>
                <td>{pet.availability_status}</td>
                <td>{pet.image}</td>
                <td>{pet.shelter_id}</td>
              </tr>
            ))}
            <div>
              {petData.map((pet) => (
                <div key={pet.id}>
                  <span>{pet.name}</span>
                  <button onClick={() => handleDeletePet(pet.id)}>Remove</button>
                </div>
              ))}
            </div>
          </tbody>
        </table>
      </div>

  <div className="border d-flex flex-column">
  <h3>Add New Pet</h3>
      <Formik
        initialValues={newPet}
        validationSchema={validationSchema}
        onSubmit={handleAddPet}
      >
        <Form>
          <label>Species:</label>
          <Field type="text" name="species" />
          <ErrorMessage name="species" component="div" className="error" />

        
          <label>Name:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className="error" />

        
          <label>Breed:</label>
          <Field type="text" name="breed" />
          <ErrorMessage name="breed" component="div" className="error" />

          
          <label>Birthday:</label>
          <Field type="text" name="birthday" />
          <ErrorMessage name="birthday" component="div" className="error" />

       
          <label>Gender:</label>
          <Field type="text" name="gender" />
          <ErrorMessage name="gender" component="div" className="error" />

       
          <label>Size:</label>
          <Field type="text" name="size" />
          <ErrorMessage name="size" component="div" className="error" />

          
          <label>Description:</label>
          <Field type="text" name="description" />
          <ErrorMessage name="description" component="div" className="error" />

         
          <label>Availability Status:</label>
          <Field type="text" name="availability_status" />
          <ErrorMessage
            name="availability_status"
            component="div"
            className="error"
          />

          
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleInputChange}
          />
          <ErrorMessage name="image" component="div" className="error" />

         
          <button type="submit">Add Pet</button>
        </Form>
      </Formik>
    </div>

    </AdminContainer>

</main>
  </>
  )};

export default AdminPetList