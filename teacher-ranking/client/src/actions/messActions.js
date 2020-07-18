import api from "./../api/index"
import * as types from "../constants/actionTypes"
import axios from "axios"

const listCmts = () => async (dispatch) =>{
    try{
        const {data} =await  api.get(`api/comments/`)
        
        dispatch({type: types.GET_COMMENT_LIST, payload: data})
        return {status: true,data: data}
    }
    catch(error){
        return {status: false,message: error}
        
    }
}

const DetailsCmts = (pdhId) => async (dispatch) =>{
    try{
        const {data} =await  api.get(`api/comments/` +pdhId)
        
        dispatch({type: types.GET_COMMENT_DETAILS, payload: data})
        return {status: true,data: data}
    }
    catch(error){
        return {status: false,message: error}
        
    }
}

export {listCmts, DetailsCmts}