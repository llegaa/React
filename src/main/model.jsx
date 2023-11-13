import {NavLink} from "react-router-dom";
import React from "react";
import main from "./main.module.css";

let Model = (props)=>{
    return(
        <div className={main.oneMod}>
            <table>
                <caption>Модель {props.name_model}</caption>
                <tr><td>Имя:</td><td>{props.name}</td></tr>
                <tr><td>Имя модели:</td><td>{props.name_model}</td></tr>
                <tr><td>Тип:</td><td id="typTable" >{props.type}</td></tr>
                <tr><td>Цвет:</td><td id="colTable">{props.color}</td></tr>
                <tr><td>Размер:</td><td id="sizTable">{props.size}</td></tr>
                <tr><td><NavLink to={"/model/" + props.id}>Перейти к модели</NavLink></td></tr>
            </table>

        </div>
    )
}
export default Model