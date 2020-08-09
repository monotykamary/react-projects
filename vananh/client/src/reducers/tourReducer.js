import * as types from "../constants/actionTypes"
const initialState=[]

function tourListReducer(state =  {tours: {}}, action){
    switch (action.type){
        case types.GET_TOURS_LIST:
            return action.payload;
        default:
            return state;

    }
}

function tourDetailsReducer(state =  {tours: {}}, action){
    switch (action.type){
        case types.GET_TOURS_DETAILS:
            return action.payload;
        default:
            return state;

    }
}

function tourSavesReducer(state =  {tours: {}}, action){
    switch (action.type){
        case types.GET_TOURS_SAVE:
            return action.payload;
        default:
            return state;

    }
}

export {tourDetailsReducer, tourListReducer, tourSavesReducer}