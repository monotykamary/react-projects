import api from "./../api/index"
import * as types from "../constants/actionTypes"
import axios from "axios"

const listPhd = () => async (dispatch) =>{
    try{
        const {data} =await api.get("/api/professors")
        
        dispatch({type: types.GET_PHD_LIST, payload: data})
        return {status: true,data: data}
    }
    catch(error){
        return {status: false,message: error}
        
    }
}

const detailsPhd = (phdId)=> async(dispatch) =>{
    try{
        const {data} =await api.get("/api/professors/" + phdId)
        
        dispatch({type: types.GET_PHD_DETAILS, payload: data})
        return {status: true, data: data}

    }
    catch(error)
    {
        return {status: false, message: error}
    }
}



export {listPhd, detailsPhd}