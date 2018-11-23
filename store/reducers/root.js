import {ADD_NOTE, 
	DELETE_NOTE, 
	FILTER_NOTES, 
	SAVE_USER_INPUT,
	 OPEN_ADD_MENU,
	CLOSE_ADD_MENU} from '../actions/actionTypes'

const initialState = {
      openModal:false,
      content:[],
      userInput: "",
    };

const reducer = (state = initialState, action) =>{

	switch(action.type){

	case SAVE_USER_INPUT:

		return({...state,
     			 userInput:action.value,
    		   });

	case ADD_NOTE:

		if(state.userInput.trim() !== ""){

			return ({...state, 
					 content: [...state.content,{ key: Math.random(), value:state.userInput}],
					 userInput: "",
					});
		}

	case OPEN_ADD_MENU:

		return ({...state,
  				openModal:true,
    			});

	case DELETE_NOTE:

		return ({...state,
      			content:state.content.filter(note => note.key !== action.key)
   				});

	case FILTER_NOTES: 

		return ({...state,
     			 content:state.content
    			});

	case CLOSE_ADD_MENU:

		return ({...state,
  				openModal:false,
    			});

	default:

		return state;

	}


}

export default reducer;