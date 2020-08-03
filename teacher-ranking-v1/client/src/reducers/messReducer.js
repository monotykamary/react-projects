import * as types from "../constants/actionTypes"
const initialState=[]

function messListReducer(state = initialState, action){
    switch (action.type){
        case types.GET_MESSAGE_LIST:
            return action.payload;
        default:
            return state;

    }
}

export default messListReducer