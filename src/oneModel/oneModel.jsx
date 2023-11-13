
import s from "./oneModel.module.css"
//import View from "../threeJS/view";

let OneModel = (props)=>{
    //let conv = useRef(null);
   // useEffect(()=>{console.log(props.three(conv))})
    return <div className={s.all}>
        <table>
            <caption>Модель {props.models.name_model}</caption>
            <tr><td>Имя:</td><td>{props.models.name}</td></tr>
            <tr><td>Имя модели:</td><td>{props.models.name_model}</td></tr>
            <tr><td>Тип:</td><td>{props.models.type}</td></tr>
            <tr><td>Цвет:</td><td>{props.models.color}</td></tr>
            <tr><td>Размер:</td><td>{props.models.size}</td></tr>
            <tr><td>Комментарии:</td><td>{props.models.comments}</td></tr>
            <tr><td>Описание:</td><td id="sizTable">{props.models.descriptions}</td></tr>
            {props.activeButt(props.params.modelId)}
        </table>
        {props.modelDel(props.activeDel)}
        {/*<View data={props.models}/>*/}

    </div>
}
export default OneModel