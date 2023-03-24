import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:8888'
})

let getAllStatuses = () => {
    return Axios.get('/statuses')
}

let getAllSeverities = () => {
    return Axios.get('/severities')
}
export const referenceService =  {
    getAllStatuses, getAllSeverities,

}