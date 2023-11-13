import Header from "./header";
import {connect} from "react-redux";
import {logOut} from "../redax/loginReducer";


let HeaderContainer = (props)=>{
    return <Header loginIn={props.loginIn} logOut={props.logOut}/>
}

let mapStateToProps = (state)=>{
    return{
        loginIn: state.log.loginIn
    }
}
export default connect(mapStateToProps, {logOut})(HeaderContainer)