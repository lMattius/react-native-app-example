import {ADD_NOTE, DELETE_NOTE, FILTER_NOTES, SAVE_USER_INPUT, OPEN_ADD_MENU} from './actionTypes'

export const saveUserInput = (value) => {

	return {type: SAVE_USER_INPUT,
	value}

}

export const addNote = () => {

	return {type: ADD_NOTE};

}

export const openAddMenu = () => {

	return {type: OPEN_ADD_MENU,};

}

export const deleteNote = (key) => {

	return{type: DELETE_NOTE,
	key,};

}

export const filterNotes = () => {

	return {type: FILTER_NOTES,}


}
