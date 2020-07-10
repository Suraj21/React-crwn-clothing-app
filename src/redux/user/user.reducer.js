// A Reducer is just a function that just gets two properties 
// 1. a state object 2. an Action - it is object which speicfies what type of action that is coming 
// through.


import { UserActionTypes } from './user.types'
const INITIAL_STATE = {
    currentUser : null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;