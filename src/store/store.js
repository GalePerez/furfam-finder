import { createStore, combineReducers } from 'redux';
import animalReducer from './animalReducers';
import petReducer from './petReducers';

const rootReducer = combineReducers({
  pets: petReducer,
  animals: animalReducer,
  
  // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;