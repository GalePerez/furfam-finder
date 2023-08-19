const initialState = {
    pets: [],
  };
  
  const petReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PET':
        return {
          ...state,
          pets: [...state.pets, action.payload],
        };
      // Other cases for different actions
      default:
        return state;
    }
  };
  
  export default petReducer;