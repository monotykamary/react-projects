import {combineReducers} from "redux"
import { tourListReducer, tourDetailsReducer } from "./tourReducer"

const rootReducer=combineReducers({
    tourList: tourListReducer,
    tourDetails: tourDetailsReducer,
})

export default rootReducer