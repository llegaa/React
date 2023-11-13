import s from "../oneModel/oneModel.module.css";
//import {modelApi} from "../api/api";

let OneModelReduct = (props)=>{
    //let conv = useRef(null);
    // useEffect(()=>{console.log(props.three(conv))})
    return <div className={s.all}>
        <table>
            <caption>Модель {props.models.name_model}</caption>
            <tr><td>Имя модели:</td><td><input onChange={props.change("nameModel")} value={props.models.name_model}/></td></tr>
            <tr><td>Тип:</td><td><input onChange={props.change("type")} value={props.models.type}/></td></tr>
            <tr><td>Цвет:</td><td><input type="color" onChange={props.change("color")} value={props.models.color}/></td></tr>
            <tr><td>Размер:</td><td><input type="number" min={1} max={10} onChange={props.change("size")} value={props.models.size}/></td></tr>
            <tr><td>Комментарий:</td><td><input onChange={props.change("comments")} value={props.models.comments}/></td></tr>
            <tr><td>Описание:</td><td><input onChange={props.change("descriptions")} value={props.models.descriptions}/></td></tr>
            <tr><td></td><td><button onClick={props.sendData}>{props.nameBut}</button></td></tr>
        </table>

        {/*<View data={props.models}/>*/}

    </div>
}
export default OneModelReduct