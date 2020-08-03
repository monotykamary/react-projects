
import * as types from "../constants/actionTypes"
const initialState=[]

function phdListReducer(state = initialState, action){
    switch (action.type){
        case types.GET_PHD_LIST:
            return action.payload;
        default:
            return state;

    }
}

function phdDetailsReducer(state =  {professor: {}}, action){
    switch (action.type){
        case types.GET_PHD_DETAILS:
            return action.payload;
        default:
            return state;

    }
}

export {phdListReducer, phdDetailsReducer} 