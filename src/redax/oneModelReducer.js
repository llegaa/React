const SET_MODEL = 'SET-MODEL'
const NEW_MODEL_NAME= 'NEW-MODEL-NAME'
const NEW_MODEL_NAME_MODEL= 'NEW-MODEL-NAME-MODEL'
const NEW_MODEL_TYPE= 'NEW-MODEL-TYPE'
const NEW_MODEL_COLOR= 'NEW-MODEL-COLOR'
const NEW_MODEL_SIZE= 'NEW-MODEL-SIZE'
const NEW_MODEL_COMMENT= 'NEW-MODEL-COMMENT'
const NEW_MODEL_DESCRIPTION= 'NEW-MODEL-DESCRIPTION'
const CLEAN_MODEL='CLEAN-MODEL'
let initialState ={
    models: {}
}

export const oneModelReducer=(state = initialState, action)=>{
    let stateCopy = {...state}
    stateCopy.models = {...state.models}
    switch (action.type) {
        case SET_MODEL:{
            stateCopy.models = action.model
            stateCopy.modelId = action.modelId
            return stateCopy
        }
        case NEW_MODEL_NAME:{
            stateCopy.models.name = action.name
            return stateCopy
        }
        case NEW_MODEL_NAME_MODEL:{
            stateCopy.models.name_model = action.nameModel
            return stateCopy
        }
        case NEW_MODEL_TYPE:{
            stateCopy.models.type = action.typeMod
            return stateCopy
        }
        case NEW_MODEL_COLOR:{
            stateCopy.models.color = action.color
            return stateCopy
        }
        case NEW_MODEL_SIZE:{
            stateCopy.models.size = action.size
            return stateCopy
        }
        case NEW_MODEL_COMMENT:{
            stateCopy.models.comments = action.comment
            return stateCopy
        }
        case NEW_MODEL_DESCRIPTION:{
            stateCopy.models.descriptions = action.description
            return stateCopy
        }
        case CLEAN_MODEL:{
            stateCopy.models={}
            stateCopy.modelId=null
            console.log(stateCopy)
            return stateCopy
        }
        default: return state

    }
}


export const setModel =(models, modelId)=>{
    return {
        type: 'SET-MODEL',
        model: models,
        modelId
    }
}
export const setName =(name)=>{
    return {
        type: 'NEW-MODEL-NAME',
        name
    }
}
export const setNameModel =(nameModel)=>{
    return {
        type: 'NEW-MODEL-NAME-MODEL',
        nameModel
    }
}
export const setType =(typeMod)=>{
    return {
        type: 'NEW-MODEL-TYPE',
        typeMod
    }
}
export const setColor =(color)=>{
    return {
        type: 'NEW-MODEL-COLOR',
        color
    }
}
export const setSize =(size)=>{
    return {
        type: 'NEW-MODEL-SIZE',
        size
    }
}
export const setComments=(comment)=>{
    return {
        type: 'NEW-MODEL-COMMENT',
        comment
    }
}
export const setDescriptions =(description)=>{
    return {
        type: 'NEW-MODEL-DESCRIPTION',
        description
    }
}
export const cleanModel =()=>{
    return {
        type: 'CLEAN-MODEL',

    }
}


