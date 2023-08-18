import axios from 'axios';
import { useEffect, useState } from "react"
import { useParams } from "react-router"

function PetInfo() {
    const { id } = useParams()
    const [pet, setPet] = useState({
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

    const fetchAnimals = async () => {
    const res = await axios(`http://localhost:8000/api/v1/pets/${id}`) 
    const pet = res.data.data 
    const petObj = {
      species: pet.species,
      image: pet.image,
      name: pet.name,
      breed: pet.breed,
      birthday: pet.birthday,
      gender: pet.gender,
      size: pet.size,
      description: pet.description,
      availability_status: pet.availability_status
    }

    setPet(petObj)

    }
  

  useEffect(() => {
    fetchAnimals()
  }, [])

    return (
        <>
        <div className="d-flex flex-wrap">
         <div key={pet.id} className="card m-2" style={{ width: "18rem" }}>
              <img src={pet.image} alt={pet.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Species: {pet.species}</h5>
                <p className="card-text">Name: {pet.name}</p>
                <p className="card-text">Breed: {pet.breed}</p>
                <p className="card-text">Birthday: {pet.birthday}</p>
                <p className="card-text">Gender: {pet.gender}</p>
                <p className="card-text">Size: {pet.size}</p>
                <p className="card-text">Description: {pet.description}</p>
                <p className="card-text">Availability Status: {pet.availability_status}</p>
              </div>
            </div>
        
        </div>
        </>
    )
}

export default PetInfo