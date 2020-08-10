import * as types from "../constants/actionTypes"
const initialState=[]

function userLoginReducer(state =  {users: {}}, action){
    switch (action.type){
        case types.USER_LOGIN:
            return {userInfo: action.payload};
        default:
            return state;

    }
}



export {userLoginReducer}