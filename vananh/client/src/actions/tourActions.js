import api from "../api/index"
import * as types from "../constants/actionTypes"

const listTours = () => async (dispatch) =>{
    try{
        const {data} =await api.get(`api/tours/`)
        
        dispatch({type: types.GET_TOURS_LIST, payload: data})
        return {status: true,data: data}
    }
    catch(error){
        return {status: false,message: error}
        
    }
}

const detailsTours = (tourId) => async (dispatch) =>{
    try{
        const {data} =await api.get(`api/tours/` +tourId)
        
        dispatch({type: types.GET_TOURS_DETAILS, payload: data})
        return {status: true,data: data}
    }
    catch(error){
        return {status: false,message: error}
        
    }
}

export {listTours, detailsTours}