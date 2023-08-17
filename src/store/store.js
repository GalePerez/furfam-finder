import { createStore, combineReducers } from 'redux';
import animalReducer from './animalReducers';
import petReducer from './petReducers';

const rootReducer = combineReducers({
  pets: petReducer,
  animals: animalReducer,
  
});

const store = createStore(rootReducer);

export default store;