import axios from 'axios';
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import '../style/petinfo.css'
import AdoptionForm from '../components/AdoptionForm';

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

  const toggleAdoptionForm = () => {
    setShowAdoptionForm(!showAdoptionForm);
  };

  const handleSubmit = async (values, actions) => {
    // Your submission logic here

    actions.resetForm();
    setShowAdoptionForm(false);
  }

  const [showAdoptionForm, setShowAdoptionForm] = useState(false);


    return (
        <>
        <div className="pet-info-container body">
          <div key={pet.id} className="pet-info-img">
              <img src={pet.image} alt={pet.name} className="" style={{ width: "28rem" }}/>
              <p className="pet-info-name">Name: {pet.name}</p>
          </div>
            <div className="pet-info-descriptions">
              <p className="">Species: {pet.species}</p>
              <p className="t">Breed: {pet.breed}</p>
              <p className="">Birthday: {pet.birthday}</p>
              <p className="">Gender: {pet.gender}</p>
              <p className="">Size: {pet.size}</p>
              <p className="">Description: {pet.description}</p>
              <p className="">Availability Status: {pet.availability_status}</p>
            </div>
        </div>
        <div className='adopt-now-button'>
            <button onClick={toggleAdoptionForm} style={{width: "10rem"}}>Adopt Now</button>

      
            {showAdoptionForm && <AdoptionForm onSubmit={handleSubmit} />}

        </div>
        
        

        </>
    )
}

export default PetInfo