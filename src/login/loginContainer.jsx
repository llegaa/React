import {entranceInAcc, updateNewName, updatePassword} from "../redax/loginReducer";
import Login from "./login";
import {connect} from "react-redux";
import React from "react";
import {userApi} from "../api/api";

class LoginContainer extends React.Component{
    sendName = ()=>{
        userApi.checkApiKey(this.props.nameUser)
        .then((response)=>{
           if(response.status === 201 && response.data===this.props.password){
               console.log(1111)
               this.props.entranceInAcc()
               window.location.replace("/");
           }
           if(response.status === 200){
               this.props.updatePassword(response.data)

           }
        })
    }

    checkName=(e)=>{
        let name = e.target.value
        this.props.updateNewName(name)
    };
    checkPassword = (e)=>{
        let pass = e.target.value
        this.props.updatePassword(pass)
    }
    render() {
        return <Login
            {...this.props}
            checkName={this.checkName}
                      checkPassword={this.checkPassword}
                      sendName={this.sendName}/>
    }
}

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
         nameUser: state.log.nameUser,
         password: state.log.password,
         loginIn: state.log.loginIn
     }
 }
// let mapDispatchToBody = (dispatch)=>{
//     return{
//         updateNewName:(name)=>{
//             dispatch(updateNewName(name))
//         },
//         updatePassword:(password)=>{
//             dispatch(updatePassword(password))
//         }
//
//     }
// }
export default connect(mapStateToProps, {updateNewName, updatePassword, entranceInAcc})(LoginContainer)
