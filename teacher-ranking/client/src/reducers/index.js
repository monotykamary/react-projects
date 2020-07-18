import {combineReducers} from "redux"
import {phdDetailsReducer, phdListReducer} from "./phdReducers"
import auth from "./auth"
import { cmtDetailsReducer, cmtListReducer } from './messReducer'

const rootReducer=combineReducers({
    phdList: phdListReducer,
    phdDetails: phdDetailsReducer,
    auth,
    cmtList: cmtListReducer,
    cmtDetails: cmtDetailsReducer,
})

export default rootReducer