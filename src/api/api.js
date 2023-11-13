import axios from "axios";
export const modelApi = {
    getOneModel(modelId){
       return axios.get(`http://127.0.0.1:8000/api/v3/models/${modelId}`)
            .then(response=> {
                return response.data}
            )
    },
    getAllModels(){
        return axios.get('http://127.0.0.1:8000/api/v3/models').then((response)=>{ return response.data})
    },

    updateModel(modelId, data, Api){
        console.log()
        return axios.put(`http://127.0.0.1:8000/api/v3/models/${modelId}`, data, {headers: {
                "apikey": `${Api}`,
                "Content-type": "application/json"}}).then(()=>{window.location.replace("/model/" + modelId)})
    },
    deleteModel(modelId, Api){
        return axios.delete(`http://127.0.0.1:8000/api/v3/models/${modelId}`,{headers: {
                "apikey": `${Api}`}}).then(()=> window.location.replace("/"))
    },
    addModel(Api, newModel){
        console.log(Api, newModel)
        return axios.post(`http://127.0.0.1:8000/api/v3/models`, JSON.stringify(newModel),{headers: {
                "apikey": `${Api}`,
                "Content-type": "application/json"}}).then(()=> window.location.replace("/"))
    }
}

    export const userApi = {
    checkApiKey(nameUser){
        return axios.post('http://127.0.0.1:8000/api/v3/login', {"name": `${nameUser}`})
            .then((response)=>{
                return {status: response.status, data: response.data}
            })
    }

 }
