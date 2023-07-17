let dataModels = []
async function getModels() {
    let response = await fetch('http://127.0.0.1:8000/api/v3/models')
    dataModels = await response.json()
    console.log(dataModels)
        return dataModels
}
export default getModels