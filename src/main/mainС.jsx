import main from "./main.module.css"
import Model from "./model";
import React from "react";
import Balls from "../design/balls/balls";
import {NavLink} from "react-router-dom";




let Main =(props)=>{
      return  <>
          {props.isFetching ? <Balls/>:null}
          <div className={main.all}>
          {props.models.map(m =><Model id={m._id} name={m.name} name_model={m.name_model} type={m.type} color={m.color} size={m.size}/>)}
            {/*<textarea onChange={props.onModelChange} value={props.newNameModel}></textarea>*/}
            {/*<button onClick={props.add}></button>*/}
              <NavLink className={main.addMod} to={"/addmodel"}> Добавить модель</NavLink>

        </div>
    </>

}

export default Main