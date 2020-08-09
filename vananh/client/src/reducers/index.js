import {combineReducers} from "redux"
import { tourListReducer, tourDetailsReducer, tourSavesReducer } from "./tourReducer"

const rootReducer=combineReducers({
    tourSave: tourSavesReducer,
    tourList: tourListReducer,
    tourDetails: tourDetailsReducer,
})

export default rootReducer