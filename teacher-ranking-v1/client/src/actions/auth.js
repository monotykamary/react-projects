import api from "./../api/index"
import * as types from "../constants/actionTypes"
import axios from "axios"

export const login=(credentials)=>(dispatch)=>{

}

export const signup=(credentials)=>(dispatch)=>{
    console.log("im in login"); 
    return api.post("/api/users/register",credentials)
        .then(user=>{
            return Promise.resolve({status: true,data:user,message: "Dang ki thanh cong"})
        })
        .catch((err)=>{return {status: false,message: err.data.response.message}})
}

export const logout=()=>(dispatch)=>{
    console.log("Im in logout");
    
    localStorage.removeItem("token");
    dispatch(setCurrentUser({}))
}


export const setCurrentUser=(data)=>{
    return{
      type: "SET_CURRENT_USER",
      payload: data
    }
  }