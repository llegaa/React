import {applyMiddleware, combineReducers, createStore} from "redux";
import modelsReducer from "./modelsReducer";
import loginReducer from "./loginReducer";
import {oneModelReducer} from "./oneModelReducer";
import thunkMiddleware from "redux-thunk"



let reducers = combineReducers({mod:modelsReducer, log:loginReducer, oneModel: oneModelReducer})
let store= createStore(reducers, applyMiddleware(thunkMiddleware))

window.store= store
export default store