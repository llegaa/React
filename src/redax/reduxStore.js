import {combineReducers, createStore} from "redux";
import modelsReducer from "./modelsReducer";
import loginReducer from "./loginReducer";



let reducers = combineReducers({mod:modelsReducer, log:loginReducer})
let store= createStore(reducers)

window.store= store
export default store