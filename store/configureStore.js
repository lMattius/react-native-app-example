import {combineReducers, createStore} from 'redux'

import notesReducer from './reducers/root';

const rootReducer = combineReducers({
	notes: notesReducer,
});

const configureStore = () => {

	return createStore(rootReducer);

};

export default configureStore;