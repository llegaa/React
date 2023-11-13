import headerPic from '../pic/headerPic.png';
import style from './header.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
let Header = (props)=>{
  return( 
      <header className={style.header}>
          <img src={headerPic} alt=""/>
          <h1>Model</h1>
          {!props.loginIn?<NavLink to="/login">Вход</NavLink>:<button onClick={props.logOut}>выход</button>}
      </header>
      );
}
export default Header