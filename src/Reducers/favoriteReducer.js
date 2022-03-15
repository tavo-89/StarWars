import {TYPES} from '../Actions/favoriteActions'

export const favoriteInitial = {
    db: null,
    favorite:[]
}

export function favoriteReducer (state, action) {

    
    switch (action.type) {
        
        case TYPES.ADD_TO_FAVORITE:{
            console.log(action.payload)

            let newItem = state.results.find(e => e === action.payload)
            console.log(newItem)
        }
            
            break;

        case TYPES.REMOVE_TO_FAVORITE:{

        }
            
            break;

        case TYPES.REMOVE_TO_FAVORITE:{
        }
            
            break;
    
        default:
            return state
    }

}