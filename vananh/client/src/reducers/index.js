import {combineReducers} from "redux"
import { tourListReducer, tourDetailsReducer, tourSavesReducer } from "./tourReducer"
import Cookie from 'js-cookie';


const userInfo = Cookie.getJSON('userInfo') || null;


const rootReducer=combineReducers({
    tourSave: tourSavesReducer,
    tourList: tourListReducer,
    tourDetails: tourDetailsReducer,
})

export default rootReducer