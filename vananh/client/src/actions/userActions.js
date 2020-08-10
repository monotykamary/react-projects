import api from "../api/index"
import * as types from "../constants/actionTypes"
import Cookie from "js-cookie";

const login = (email, password) => async (dispatch) =>{
    try{
        const {data} =await api.post(`users/login`, {email, password})
        dispatch({type: types.USER_LOGIN, payload: data})
        Cookie.set('userInfo', JSON.stringify(data));
        return {status: true,data: data}
    }
    catch(error){
        return {status: false,message: error}
        
    }
}

export {login}