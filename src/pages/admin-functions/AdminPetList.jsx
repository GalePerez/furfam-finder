import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPetList } from '../../store/petActions';
import AdminContainer from '../../components/AdminContainer';


function AdminPetList() {
  const pets = useSelector((state) => state.pets.petList);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await fetch(); // API FOR PETS
        const data = await response.json();
        dispatch(setPetList(data.pet_list));
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    }
    fetchPets();
  }, [dispatch]);
  return <>

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
            {pets.map((pet) => (
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
    </AdminContainer>


  </>
}

export default AdminPetList