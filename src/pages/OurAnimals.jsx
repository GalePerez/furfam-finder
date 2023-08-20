import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setPets } from '../store/animalReducers';
import OurAnimalCard from '../components/OurAnimalsCard';
import '../style/ouranimals.css'


function OurAnimals() {
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
    <main className="d-flex body">
    
    <div>
      <h2 className='our-animals-title'>Our Animals</h2>
      <div className="d-flex flex-wrap our-animals-container">
        {
          pets.map(
            pet => <OurAnimalCard key={pet.id} id={pet.id} image={pet.image} species={pet.species} name={pet.name} breed={pet.breed} /> 
          )
        }
      </div>
      
      
    </div>
    </main>
  );
}

export default OurAnimals;
