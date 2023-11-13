import {modelApi} from "../api/api";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    cleanModel,
    setColor,
    setComments,
    setDescriptions,
    setModel,
    setName,
    setNameModel,
    setSize,
    setType
} from "../redax/oneModelReducer";
import React, {useEffect} from "react";
import OneModelReduct from "../oneModelRrduct/oneModelReduct";

let AddModelContainer = (props)=>{
    useEffect(()=>{

     }, [])
    let nameBut= "Добавить"
    let data = {
        name: props.models.name,
        name_model:props.models.name_model,
        type: props.models.type,
        color: props.models.color,
        size: props.models.size,
        comments: props.models.comments,
        descriptions: props.models.descriptions
    }
    console.log(data)
    let sendData = ()=>{
        console.log(props.models)
        props.setName(JSON.parse(localStorage.getItem("log")).nameUser)
        modelApi.addModel(JSON.parse(localStorage.getItem("log")).password, data)
    }
    // let sendData = ()=>{
    //     //updateModel(props.modelId,data, JSON.parse(localStorage.getItem("log")).password)
    // }
    let change = (input)=>{
        return (e)=>{let changeValue = e.target.value
            switch(input){
                case "name":
                    props.setName(changeValue)
                    break
                case "nameModel":
                    props.setNameModel(changeValue)
                    break
                case "type":
                    props.setType(changeValue)
                    break
                case "color":
                    props.setColor(changeValue)
                    break
                case "size":
                    props.setSize(changeValue)
                    break
                case "comments":
                    props.setComments(changeValue)
                    break
                case "descriptions":
                    props.setDescriptions(changeValue)
                    break
                default:
                    break
            }}

    }
    return <OneModelReduct sendData={sendData} nameBut={nameBut} change={change} {...props}/>
}
let mapStateToProps = (state)=>{
    return{
        models: state.oneModel.models,
        modelId: state.oneModel.modelId
    }
}
// let mapDispatchToBody = (dispatch)=>{
//     return{
//         addModel:()=>{
//             dispatch(addModelActionCreator())
//         },
//         updateNewName:(name)=>{
//             dispatch(updateNewNameActionCreator(name))
//         },
//         setModels: (models)=> {
//             dispatch(setModelsAC(models))
//         },
//         toggleIsFetching: (isFetching)=>{
//             dispatch(toggleIsFetching(isFetching))
//         }
//
//     }
// }
export default compose(connect(mapStateToProps, {setModel, setName, setNameModel,
    setType, setColor, setSize,
    setComments, setDescriptions, cleanModel}))
(AddModelContainer)


