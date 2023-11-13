import {connect} from "react-redux";
import React, {useEffect} from "react";
import {setModel} from "../redax/oneModelReducer";
import OneModel from "./oneModel";
import {modelApi} from "../api/api";
import {compose} from "redux";
import {NavLink} from "react-router-dom";
//import View from "../threeJS/view";


let OneModelContainer1 = (props)=>{
    useEffect(()=>{console.log(props)
        modelApi.getOneModel(props.params.modelId).then(responce => props.setModel(responce, props.params.modelId))}, [])

    let activeButt = (modelId)=>{
        if(props.loginIn && props.nameUser===props.models.name){
            return <tr><td><NavLink to={"/" + modelId + "/reduction"}>Редактировать модель</NavLink></td>
                <td><button onClick={props.deleteActive}>Удалить модель</button></td></tr>
        }
    }
    return  <>
        <OneModel params={props.params} modelDel={props.modelDel} activeDel={props.activeDel} activeButt={activeButt}
                  id={props.params.modelId} {...props}/>
    </>
}


// class OneModelContainer extends React.Component{
//     componentDidMount() {
//         modelApi.getOneModel(this.props.params.modelId).then(responce => this.props.setModel(responce, this.props.params.modelId))
//     }
//
//     activeButt(modelId){
//         if(this.loginIn && this.nameUser===this.models.name){
//            return <tr><td><NavLink to={"/" + modelId + "/reduction"}>Редактировать модель</NavLink></td>
//                 <td><button onClick={this.deleteActive}>Удалить модель</button></td></tr>
//         }
//
//     }
//     render() {
//         return  <>
//             <OneModel modelDel={this.props.modelDel} activeDel={this.props.activeDel} activeButt={this.activeButt}
//                       id={this.props.params.modelId} {...this.props}/>
//         </>
//     }
// }
// let mapStateToProps = (state)=>{
//     return{
//         nameUser: state.log.nameUser,
//         loginIn: state.log.loginIn,
//         models: state.oneModel.models,
//         idModel: state.oneModel.idModel
//     }
// }
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
// export default compose(connect(mapStateToProps, {setModel}))
//     (OneModelContainer)
export default OneModelContainer1
