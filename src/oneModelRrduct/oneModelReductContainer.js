import React from "react";
//import {useParams} from "react-router-dom";
import OneModelReduct from "./oneModelReduct"
import {modelApi} from "../api/api";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    setColor,
    setComments,
    setDescriptions,
    setModel,
    setName,
    setNameModel,
    setSize,
    setType
} from "../redax/oneModelReducer";

let OneModelReductContainer = (props)=>{
    // useEffect(()=>{
    //     modelApi.getOneModel(params.modelId).then(responce => props.setModel(responce))
    // }, [])
    let nameBut= "Сохранить"
    let data = {
        name_model:props.models.name_model,
        type: props.models.type,
        color: props.models.color,
        size: props.models.size,
        comments: props.models.comments,
        descriptions: props.models.descriptions
    }
    console.log(data)
    let sendData = ()=>{
        console.log(props.modelId)
        modelApi.updateModel(props.modelId,data, JSON.parse(localStorage.getItem("log")).password)
    }
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
    return <OneModelReduct nameBut={nameBut} change={change} sendData={sendData} {...props}/>
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
export default compose(connect(mapStateToProps, {setModel, setName, setNameModel, setType, setColor, setSize, setComments, setDescriptions}))
(OneModelReductContainer)


