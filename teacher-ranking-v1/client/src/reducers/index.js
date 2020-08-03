import {combineReducers} from "redux"
import {phdDetailsReducer, phdListReducer} from "./phdReducers"
import auth from "./auth"
import cmts from './messReducer'

const rootReducer=combineReducers({
    phdList: phdListReducer,
    phdDetails: phdDetailsReducer,
    auth,
    cmtList: cmts,
})

export default rootReducer