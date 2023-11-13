import s from "../oneModel/oneModel.module.css";

let AddModel = (props)=>{
    debugger
    //let conv = useRef(null);
    // useEffect(()=>{console.log(props.three(conv))})
    return <div className={s.all}>
        <table>
            <tr><td>Имя</td><td><input onChange={props.change("name")} value={props.models.name}/></td></tr>
            <tr><td>Имя модели:</td><td><input onChange={props.change("nameModel")} value={props.models.name_model}/></td></tr>
            <tr><td>Тип:</td><td><input onChange={props.change("type")} value={props.models.type}/></td></tr>
            <tr><td>Цвет:</td><td><input onChange={props.change("color")} value={props.models.color}/></td></tr>
            <tr><td>Размер:</td><td><input onChange={props.change("size")} value={props.models.size}/></td></tr>
            <tr><td></td><td><button onClick={props.sendData}>Сохранить</button></td></tr>
        </table>

        {/*<View data={props.models}/>*/}

    </div>
}
export default AddModel