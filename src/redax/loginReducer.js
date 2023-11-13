//const addModel = 'ADD-MODEL'


const updNewName='UPDATE-NEW-NAME'
const updNewPassword = 'UPD-NEW-PASSWORD'
const entrance = 'ENTRANCE'
const exit ='LOG-OUT-OF-ACC'
let initialStateLog =  {loginIn: false, nameUser: "", password: ""}

const loginReducer = (state = JSON.parse(localStorage.getItem("log")) || initialStateLog, action)=>{
    switch (action.type){
        case updNewName:{
            console.log(state.loginIn)
            state.nameUser = action.nameUser
            //console.log(state.nameUser)
            return state;}
        case updNewPassword:{
            let stateCopy = {...state}
            stateCopy.password = action.password
            return stateCopy;}
        case entrance: {
            let stateCopy = {...state}
            stateCopy.loginIn = true
            localStorage.setItem("log", JSON.stringify(stateCopy))
            return stateCopy
        }
        case exit:{
            let stateCopy = {...state}
            stateCopy.loginIn = false
            stateCopy.nameUser = ""
            stateCopy.password = ""
            localStorage.setItem("log", JSON.stringify(stateCopy))
            return stateCopy
        }
        default:
            return state
    }
}

export const checkNameActionCreator =()=>{
    return {
        type: 'CHECK-NAME'
    }
}
export const updateNewName =(name)=>{
    return {
        type:'UPDATE-NEW-NAME',
        nameUser:name
    }
}
export const updatePassword =(password)=>{
    return {
        type:'UPD-NEW-PASSWORD',
        password: password
    }
}
export const logOut = ()=>{
    return{
        type: 'LOG-OUT-OF-ACC'
    }
}
export const entranceInAcc =()=>{
    return {
        type:'ENTRANCE'
    }
}

export default loginReducer