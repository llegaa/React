//const addModel = 'ADD-MODEL'
const updNewName='UPDATE-NEW-NAME'
let initialStateLog = {
        users:[{name: 'lena', password: '0000'},
            {name: 'l', password: '1111'},
            {name: 'ena', password: '2222'}
        ],
        nameUser: ""
}
const loginReducer = (state = initialStateLog, action)=>{
    switch (action.type){
        case updNewName:
            state.nameUser = action.nameUser
            return state;
        case "r":
            return state;
        default:
            return state
    }
}

export const checkNameActionCreator =()=>{
    return {
        type: 'CHECK-NAME'
    }
}
export const updateNewNameActionCreator =(name)=>{
    return {
        type:'UPDATE-NEW-NAME',
        nameUser:name
    }
}
export default loginReducer