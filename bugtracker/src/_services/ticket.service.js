import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:8888'
})

let getAllTickets = () => {
    return Axios.get('/tickets')
}

let getTicket = (tid) => {
    return Axios.get('/tickets/'+tid)
}
export const ticketService =  {
    getAllTickets, getTicket

}