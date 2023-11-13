// import {useEffect, useRef, useState} from "react";
// import s from "../oneModel/oneModel.module.css"
// import modelView from "./myThree";
// let View = (props)=>{
//     let convas = useRef(null);
//     let [modelType, setModelType]= useState()
//     let [modelColor, setModelColor]= useState()
//     let [modelSize, setModelSize]= useState()
//     useEffect(()=>{
//         setModelType(modelType=props.data.type)
//         setModelColor(modelColor=props.data.color)
//         setModelSize(modelSize = props.data.size)
//         modelView(convas.current, modelType,modelColor, modelSize)
//         setModelType(modelType="")
//         setModelColor(modelColor="")
//         setModelSize(modelSize = "")
//         //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
//     })
//
//     //modelView(convas.current)(props.type, props.color, props.size)
//     return <div ref={convas} className={s.divka}></div>
// }
// export default View