const initialState = {
    petList: [],
    animalList: [],
  };
  
  const petReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PET_LIST':
        return {
          ...state,
          petList: action.payload,
        };
      case 'SET_ANIMAL_LIST':
        return {
            ...state,
            animalList: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default petReducer;