import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:8888'
})

let getAllTickets = () => {
    return Axios.get('/tickets')
}
export const ticketService =  {
    getAllTickets,

}