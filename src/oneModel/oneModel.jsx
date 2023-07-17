import {NavLink} from "react-router-dom";
import React from "react";
import s from "./oneModel.module.css"

let OneModel = ()=>{
    return <div className={s.all}>
        <table>
            <caption>Модель props.name_model</caption>
            <tr><td>Имя:</td><td>props.name</td></tr>
            <tr><td>Имя модели:</td><td>props.name_model</td></tr>
            <tr><td>Тип:</td><td id="typTable" >props.type</td></tr>
            <tr><td>Цвет:</td><td id="colTable">props.color</td></tr>
            <tr><td>Размер:</td><td id="sizTable">props.size</td></tr>
            <tr><td><NavLink to="/id/reduction">Редактировать модель</NavLink></td>
                <td><button>Удалить модель</button></td></tr>
        </table>
        <div></div>


    </div>
}
export default OneModel