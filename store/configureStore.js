import {combineReducers, createStore} from 'redux'

import notesReducer from './reducers/root';

const rootReducer = combineReducers({
	notes: notesReducer,
})

import default const configureStore = () => {

	return createStore(rootReducer)

}