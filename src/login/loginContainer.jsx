import {updateNewNameActionCreator} from "../redax/loginReducer";
import Login from "./login";
import {connect} from "react-redux";
import React from "react";
import {addModelActionCreator} from "../redax/modelsReducer";

// let LoginContainer = (props)=>{
//     let login = React.createRef()
//     let checkName=()=>{
//         let name = login.current.value
//         props.dispatch(updateNewNameActionCreator(name))
//     };
//     return(
//         <Login login={login} nameUser={props.nameUser} checkName={checkName}/>
//        )
//
// }


 let mapStateToProps = (state)=>{
     //console.log(state)
     return{
         nameUser: state.log.nameUser
     }
 }
let mapDispatchToBody = (dispatch)=>{
    return{
        updateNewName:(name)=>{
            dispatch(updateNewNameActionCreator(name))
        }
    }
}
const LoginContainer = connect(mapStateToProps, mapDispatchToBody)(Login)
export default LoginContainer