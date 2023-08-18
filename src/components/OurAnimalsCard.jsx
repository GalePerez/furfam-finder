import { useDispatch, useSelector } from "react-redux";
import { setPets } from "../store/animalReducers";
import { useEffect } from "react";
import axios from "axios";

function OurAnimalCard() {
    const dispatch = useDispatch()
    const pets = useSelector((state) => state.pets)

    const fetchAnimals = async () => {
    const res = await axios('http://localhost:8000/api/v1/pets')
    dispatch(setPets(res.data.data))
  }

  useEffect(() => {
    fetchAnimals()
  }, [])
    return (
        <>
        <div className="d-flex flex-wrap">
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
              
            </tr>
          </thead>
          <tbody>
            {pets.map(pet => (
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
        
        </>
    )
}

export default OurAnimalCard