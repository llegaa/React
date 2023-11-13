import React, {useEffect, useRef, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import s from "./oneModel.module.css"
import {modelApi} from "../api/api";
import {compose} from "redux";
import {connect} from "react-redux";
import {setModel} from "../redax/oneModelReducer";
import OneModel from "./oneModel";
let OneModelFunc = (props)=>{
    let menuRef = useRef()
    let params = useParams();
    let [activeDel, setActiveDel] = useState(false)
    useEffect(()=>{
        modelApi.getOneModel(params.modelId).then(responce => props.setModel(responce, params.modelId))
    },[])
    useEffect(()=>{
        let handler=(e)=>{
            if(e.target.className===s.back){
                deleteActive()
            }}
        document.addEventListener("mousedown", handler)
        return()=>{
            document.removeEventListener("mousedown", handler)
        }
    }, [activeDel])

    let deleteMod=()=>{
       return modelApi.deleteModel(params.modelId, JSON.parse(localStorage.getItem("log")).password)
    }
    let deleteActive = ()=>{
        setActiveDel(p=>p=!p)
    }
    let activeButt = (modelId)=>{
        if(props.loginIn && props.nameUser===props.models.name){
            return <tr><td><NavLink to={"/" + modelId + "/reduction"}>Редактировать модель</NavLink></td>
                <td><button onClick={deleteActive}>Удалить модель</button></td></tr>
        }
    }


    let modelDel = (activeDel)=>{
        if(activeDel){
            return <div className={s.modalView}>
                <div className={s.back}></div>
                <div ref={menuRef} className={s.modalWind}>
                <h1>Вы действительно хотите удалить эту модель?</h1>
                <button onClick={deleteMod}>Да</button>
                <button onClick={deleteActive}>Нет</button>
            </div>
            </div>
        }
    }
    return <OneModel params={params} models={props.models} activeButt={activeButt} modelDel={modelDel} activeDel={activeDel}/>
}

let mapStateToProps = (state)=>{
    return{
        nameUser: state.log.nameUser,
        loginIn: state.log.loginIn,
        models: state.oneModel.models,
        idModel: state.oneModel.idModel
    }
}
export default compose(connect(mapStateToProps, {setModel}))
(OneModelFunc)

