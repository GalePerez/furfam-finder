import React, { useEffect, useState } from 'react';
import AdminContainer from '../../components/AdminContainer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPet } from '../../store/addPetActions';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import '../../style/adminpetlist.css'


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
  <main className="d-flex">
    <AdminContainer>

      <div>
        <h1 className='pet-list-title'>Pet List</h1>
        <table style={{width: "60vw"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Species</th>
              <th>Name</th>
              <th>Breed</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Size</th>
              <th>Availability Status</th>
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
                <td>{pet.availability_status}</td>
                <td>{pet.shelter_id}</td>
              </tr>
            ))}
            <div>
            </div>
          </tbody>
        </table>
      </div>

  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add Pet
  </button>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Pet</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <div className="add-pet-container">
      <Formik
        initialValues={newPet}
        validationSchema={validationSchema}
        onSubmit={handleAddPet}
      >
        
        <Form>
          <div className=' d-flex flex-wrap'>
          <label className='form-label'>Species:</label>
          <Field 
          type="text"
           name="species" 
           className='form-control'
           />
          <ErrorMessage name="species" component="div" className="error" />

          <br/>
          <label className='form-label'>Name:</label>
          <Field type="text"
           name="name"
           className='form-control' 
           />
          <ErrorMessage name="name" component="div" className="error" />

          <br/>
          <label className='form-label'>Breed:</label>
          <Field type="text"
           name="breed" 
           className='form-control'
           />
          <ErrorMessage name="breed" component="div" className="error" />

          <br/>
          <label className='form-label'>Birthday:</label>
          <Field type="text"
           name="birthday"
           className='form-control' 
           />
          <ErrorMessage name="birthday" component="div" className="error" />

          <br/>      
          <label className='form-label'>Gender:</label>
          <Field type="text"
           name="gender"
           className='form-control' 
           />
          <ErrorMessage name="gender" component="div" className="error" />

          <br/>
          <label className='form-label'>Size:</label>
          <Field type="text" 
          name="size" 
          className='form-control'
          />
          <ErrorMessage name="size" component="div" className="error" />

          <br/>
          <label className='form-label'>Description:</label>
          <Field type="text"
          name="description"
          className='form-control' 
          />
          <ErrorMessage name="description" component="div" className="error" />

          <br/>
          <label className='form-label'>Availability Status:</label>
          <Field type="text"
          name="availability_status" 
          className='form-control'
          />
          <ErrorMessage
            name="availability_status"
            component="div"
            className="error form-control"

          />

          <br/>
          <label className='form-label'>Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleInputChange}
          />
          <ErrorMessage name="image" component="div" className="error" />

         
          <button type="submit">Add Pet</button>
          </div>
        </Form>
      </Formik>
    </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" style={{width: "100px"}}>Close</button>
        </div>
      </div>
    </div>
  </div>             
  {/* <div className="add-pet-container">
      <h3 className='add-pet-text'>Add New Pet</h3>
      <Formik
        initialValues={newPet}
        validationSchema={validationSchema}
        onSubmit={handleAddPet}
      >
        
        <Form>
          <div className='form d-flex flex-wrap'>
          <label className='form-label'>Species:</label>
          <Field 
          type="text"
           name="species" 
           className='form-control'
           />
          <ErrorMessage name="species" component="div" className="error" />

          <br/>
          <label className='form-label'>Name:</label>
          <Field type="text"
           name="name"
           className='form-control' 
           />
          <ErrorMessage name="name" component="div" className="error" />

          <br/>
          <label className='form-label'>Breed:</label>
          <Field type="text"
           name="breed" 
           className='form-control'
           />
          <ErrorMessage name="breed" component="div" className="error" />

          <br/>
          <label className='form-label'>Birthday:</label>
          <Field type="text"
           name="birthday"
           className='form-control' 
           />
          <ErrorMessage name="birthday" component="div" className="error" />

          <br/>      
          <label className='form-label'>Gender:</label>
          <Field type="text"
           name="gender"
           className='form-control' 
           />
          <ErrorMessage name="gender" component="div" className="error" />

          <br/>
          <label className='form-label'>Size:</label>
          <Field type="text" 
          name="size" 
          className='form-control'
          />
          <ErrorMessage name="size" component="div" className="error" />

          <br/>
          <label className='form-label'>Description:</label>
          <Field type="text"
          name="description"
          className='form-control' 
          />
          <ErrorMessage name="description" component="div" className="error" />

          <br/>
          <label className='form-label'>Availability Status:</label>
          <Field type="text"
          name="availability_status" 
          className='form-control'
          />
          <ErrorMessage
            name="availability_status"
            component="div"
            className="error form-control"

          />

          <br/>
          <label className='form-label'>Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleInputChange}
          />
          <ErrorMessage name="image" component="div" className="error" />

         
          <button type="submit">Add Pet</button>
          </div>
        </Form>
      </Formik>
    </div> */}

    </AdminContainer>

</main>
  </>
  )};

export default AdminPetList