import React, { useEffect, useState } from 'react';
import AdoptionForm from '../components/AdoptionForm';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimalList } from '../store/animalActions';

function OurAnimals() {
  const animal = useSelector((state) => state.animals.animalList);
  const dispatch = useDispatch();
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);

  useEffect(() => {
    async function fetchAnimals() {
      try {
        const response = await fetch() // API HERE
        const data = await response.json();
        dispatch(setAnimalList(data.animal_list));
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    }
    fetchAnimals();
  }, [dispatch]);
  
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
      PET LISTING !!!
      <button onClick={toggleAdoptionForm}>Adopt Now</button>

      
      {showAdoptionForm && <AdoptionForm onSubmit={handleSubmit} />}
      
      
    </div>
  );
}

export default OurAnimals;
