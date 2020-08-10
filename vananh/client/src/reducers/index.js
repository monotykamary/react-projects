import {combineReducers} from "redux"
import { tourListReducer, tourDetailsReducer, tourSavesReducer } from "./tourReducer"
<<<<<<< HEAD
import Cookie from 'js-cookie';


const userInfo = Cookie.getJSON('userInfo') || null;
=======
import { userLoginReducer } from "./userReducer"
>>>>>>> origin/testing3


const rootReducer=combineReducers({
    tourSave: tourSavesReducer,
    tourList: tourListReducer,
    tourDetails: tourDetailsReducer,
    userLogin: userLoginReducer,
    
})

export default rootReducer