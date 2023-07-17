import {addModel, setModels, toggleIsFetching, updateNewName} from "../redax/modelsReducer";
import Main from "./mainС";
import {connect} from "react-redux";
import axios from "axios";
import Balls from "../design/balls/balls";
import main from "./main.module.css";
import Model from "./model";
import React from "react";
import {useParams} from "react-router-dom";


class MainContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get('http://127.0.0.1:8000/api/v3/models').then((response)=>{
            this.props.toggleIsFetching(false)
            this.props.setModels(response.data)})
    }
    add = ()=>{
        this.props.addModel()
    }
    onModelChange = (e)=>{
        let name = e.target.value
        this.props.updateNewName(name)
    }
    render() {
        return  <>
           <Main {...this.props} add={this.add} onModelChange={this.onModelChange}/>
        </>
    }
}
let mapStateToProps = (state)=>{
    return{
        models: state.mod.models,
        newNameModel: state.mod.newNameModel,
        isFetching: state.mod.isFetching
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
export default connect(mapStateToProps, {addModel, updateNewName,setModels,toggleIsFetching})(MainContainer)