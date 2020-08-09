import {combineReducers} from "redux"
import { tourListReducer, tourDetailsReducer, tourSavesReducer } from "./tourReducer"
import { userLoginReducer } from "./userReducer"


const rootReducer=combineReducers({
    tourSave: tourSavesReducer,
    tourList: tourListReducer,
    tourDetails: tourDetailsReducer,
    userLogin: userLoginReducer,
    
})

export default rootReducer