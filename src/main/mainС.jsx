import main from "./main.module.css"
import Model from "./model";
import React from "react";
import axios from "axios";
import Balls from "../design/balls/balls";
import {NavLink} from "react-router-dom";



class Main extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get('http://127.0.0.1:8000/api/v3/models').then((response)=>{
            this.props.toggleIsFetching(false)
            this.props.setModels(response.data)})
    }


    debugger
    add = ()=>{
        this.props.addModel()
    }
    onModelChange = (e)=>{
        let name = e.target.value
        this.props.updateNewName(name)
    }
    render() {
      return  <>
          {this.props.isFetching ? <Balls/>:null}
          <div className={main.all}>
          {this.props.models.map(m =><Model name={m.name} name_model={m.name_model} type={m.type} color={m.color} size={m.size}/>)}
            <textarea onChange={this.onModelChange} value={this.props.newNameModel}></textarea>
            <button onClick={this.add}></button>
        </div>
    </>
    }
}

export default Main