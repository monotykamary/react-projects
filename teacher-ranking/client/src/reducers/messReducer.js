import * as types from "../constants/actionTypes"
const initialState=[]

function cmtListReducer(state =  {comments: {}}, action){
    switch (action.type){
        case types.GET_COMMENT_LIST:
            return action.payload;
        default:
            return state;

    }
}

function cmtDetailsReducer(state =  {comments: {}}, action){
    switch (action.type){
        case types.GET_COMMENT_DETAILS:
            return action.payload;
        default:
            return state;

    }
}

export {cmtListReducer, cmtDetailsReducer}