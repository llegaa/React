import axios from "axios";
const SET_MODELS = 'SET-MODELS'
const ADD_MODEL = 'ADD-MODEL'
const UPDATE_NEW_NAME='UPDATE-NEW-NAME'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState =  {
         models:[],
        newNameModel: "",
        isFetching: false

}
let getDataMod = ()=>{
    axios.get('http://127.0.0.1:8000/api/v3/models').then((response)=>{return response})
}
const modelsReducer = (state = initialState, action)=>{
    switch (action.type){
        case ADD_MODEL:{
        let model = {
            name: 'asdfg', name_model: state.newNameModel, type: 'cube', color: 'red', size: '6'
        }
            let stateCopy = {...state}
            stateCopy.models = [...state.models]
            stateCopy.models.push(model)
            stateCopy.newNameModel=" "
            console.log(stateCopy)
            return stateCopy;}
        case UPDATE_NEW_NAME:{
            let stateCopy = {...state}
            stateCopy.newNameModel={...state.newNameModel}
            stateCopy.newNameModel = action.newNameModel
            console.log(stateCopy)
            return stateCopy;}
        case SET_MODELS:{
            let stateCopy = {...state}
            stateCopy.models = [...state.models]
            stateCopy.models = action.newModels
            return stateCopy
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state

    }
}


export const addModel =()=>{
    return {
        type: 'ADD-MODEL'
    }
}
export const updateNewName =(name)=>{
    return {
        type:'UPDATE-NEW-NAME',
        newNameModel:name
    }
}
export const setModels =(models)=>{
    return {
        type: 'SET-MODELS',
        newModels: models
    }
}
export const toggleIsFetching =(isFetching)=>{
    return{
        type: 'TOGGLE_IS_FETCHING',
        isFetching: isFetching
    }
}
export default modelsReducer