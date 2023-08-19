import axios from 'axios';

export const addPet = (petData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8000/api/v1/pets', petData);
    const addedPet = response.data.data;
    dispatch({
      type: 'ADD_PET',
      payload: addedPet,
    });
  } catch (error) {
    console.error('Error adding pet:', error);
  }
};