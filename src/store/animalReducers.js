const initialState = {
    animalList: [],
  };
  
  const animalReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ANIMAL_LIST':
        return {
          ...state,
          animalList: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default animalReducer;