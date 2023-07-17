import l from "./login.module.css"
import {NavLink} from "react-router-dom";
import React from "react";
import MainContainer from "../main/mainContaner";
import {updateNewNameActionCreator} from "../redax/loginReducer";

let Login = (props)=>{
    let login = React.createRef()
    let checkName=()=>{
         let name = login.current.value
        props.updateNewName(name)
     };
    return (<div className={l.all}>
        <h1>Вход</h1>
        <form>
            <div className={l.inputs}>
            <label htmlFor="login">Логин</label>
            <input ref={login} value={props.nameUser} onChange={checkName} type="text" id="login" />
            <label htmlFor="password">Пароль</label>
            <input type="text" id="password" />
            <button>Войти</button></div>
            <NavLink to="/">Зарегистрироваться</NavLink>
        </form>
    </div>)

}
export default Login