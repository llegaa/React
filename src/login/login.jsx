import l from "./login.module.css"
import {NavLink} from "react-router-dom";
import React from "react";


let Login = (props)=>{
    let login = React.createRef()
    let password = React.createRef()
    return (<div className={l.all}>
        <h1>Вход</h1>
        <form>
            <div className={l.inputs}>
            <label htmlFor="login">Логин</label>
            <input ref={login} value={props.nameUser} onChange={props.checkName} type="text" id="login" />
            <label htmlFor="password">Пароль</label>
            <input ref={password} value={props.password} onChange={props.checkPassword} type="text" id="password" />
            <button type="button" onClick={props.sendName}>Войти</button></div>
            <NavLink to="/">Зарегистрироваться</NavLink>
        </form>
    </div>)

}
export default Login