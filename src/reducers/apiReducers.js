import { types } from '../types/types'

export const apiReducers = (state = {}, action) => {
    switch(action.type) {
        case types.loadApiBreakingBad : {
            return {...state, ...action.payload}
        }
        default : {
            return state;
        }
    }
}
