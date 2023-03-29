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

let updateTicket = (ticket) => {
    console.log(ticket)
    return Axios.patch('/tickets/'+ticket.id, ticket)
}
let deleteTicket = (ticketId) => {
    return Axios.delete('/tickets/'+ticketId)
}
let createTicket = (ticket) => {
    return Axios.put('/tickets/',ticket)
}
export const ticketService =  {
    getAllTickets, getTicket, updateTicket, deleteTicket, createTicket

}