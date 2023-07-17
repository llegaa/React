import headerPic from '../pic/headerPic.png';
import style from './header.module.css'
import {NavLink} from "react-router-dom";
let Header = ()=>{
  return( 
      <header className={style.header}>
          <img src={headerPic} alt=""/>
          <h1>Model</h1>
          <NavLink to="/login">Вход</NavLink>
      </header>
      );
}
export default Header