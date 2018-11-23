import {combineReducers, createStore} from 'redux'

import notesReducer from './reducers/root';

const rootReducer = combineReducers({
	notes: notesReducer,
})

export default configureStore = () => {

	return createStore(rootReducer)

}