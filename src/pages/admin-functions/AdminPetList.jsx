import React, { useEffect, useState } from 'react';
import AdminContainer from '../../components/AdminContainer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPet } from '../../store/addPetActions';


function AdminPetList() {
  const dispatch = useDispatch()
  const [petData, setPetData] = useState([])
  const [newPet, setNewPet] = useState({
    species: '',
    image: '',
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
    const { name, value } = event.target;
    setNewPet((prevPet) => ({ ...prevPet, [name]: value }));
  };

  const handleAddPet = async () =>  {
    const { data } =
      await axios.post('http://localhost:8000/api/v1/pets', {
        species: 'newPet.species',
        name: 'newPet.name',
        breed: 'newPet.breed',
        birthday: 'newPet.birthday',
        gender: 'newPet.gender',
        size: 'newPet.size',
        description: 'newPet.description',
        availability_status: 'newPet.availability_status',
        image: 'newPet.image',
      }, {
        headers: {
          'Content-Type': 'applicaton/x-www-form-urlencoded'
        }
      })
      dispatch(addPet(newPet))
    }
     
  

  useEffect(() => {
    fetchAdminPets()
  }, [])
  

  
  return <>
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
          </tbody>
        </table>
      </div>

  <div className="border d-flex flex-column">
  <h3>Add New Pet</h3>
  <label>Species:</label>
  <input
    type="text"
    name="species"
    value={newPet.species}
    onChange={handleInputChange}
  />

  <label>Name:</label>
  <input
    type="text"
    name="name"
    value={newPet.name}
    onChange={handleInputChange}
  />

  <label>Breed:</label>
  <input
    type="text"
    name="breed"
    value={newPet.breed}
    onChange={handleInputChange}
  />

  <label>Birthday:</label>
  <input
    type="text"
    name="birthday"
    value={newPet.birthday}
    onChange={handleInputChange}
  />

  <label>Gender:</label>
  <input
    type="text"
    name="gender"
    value={newPet.gender}
    onChange={handleInputChange}
  />

  <label>Size:</label>
  <input
    type="text"
    name="size"
    value={newPet.size}
    onChange={handleInputChange}
  />

  <label>Description:</label>
  <input
    type="text"
    name="description"
    value={newPet.description}
    onChange={handleInputChange}
  />

  <label>Availability Status:</label>
  <input
    type="text"
    name="availability_status"
    value={newPet.availability_status}
    onChange={handleInputChange}
  />

<label>Image:</label>
<input
  type="file"
  accept="image/*"
  onChange={handleInputChange}
/>


  <button onClick={handleAddPet}>Add Pet</button>
</div>
    </AdminContainer>

</main>
  </>
}
export default AdminPetList