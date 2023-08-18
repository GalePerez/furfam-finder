import React, { useEffect, useState } from 'react';
import AdoptionForm from '../components/AdoptionForm';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPets } from '../store/animalReducers';

function OurAnimals() {
  const dispatch = useDispatch()
  const pets = useSelector((state) => state.pets)
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);

  const fetchAnimals = async () => {
    const res = await axios('http://localhost:8000/api/v1/pets')
    dispatch(setPets(res.data.data))
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
  
  return (
    <div>
      <h2>Our Animals</h2>
      <div className="d-flex flex-wrap">
        {pets.map(pet => (
          <div key={pet.id} className="animal-card">
            <img src={pet.image} alt={`${pet.name}`} />
            <h3>{pet.species}</h3>
            <p>Name: {pet.name}</p>
            <p>Breed: {pet.breed}</p>
          </div>
        ))}
      </div>
      <button onClick={toggleAdoptionForm}>Adopt Now</button>

      
      {showAdoptionForm && <AdoptionForm onSubmit={handleSubmit} />}
      
      
    </div>
  );
}

export default OurAnimals;
