import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { ticketService } from './../../_services/ticket.service'

const Home = () => {
    const [tickets, setTickets] = useState([])
    const flag = useRef(false)

    useEffect(() => {
        if(flag.current === false){
            ticketService.getAllTickets()
                .then(res => {
                    // Liste dans le state
                    setTickets(res.data.data)
                })
                .catch(err => console.log(err))
        }

        return () => flag.current = true
    }, [])

    return (
        <div>
            Liste des Tickets
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project</th>
                        <th>Severity</th>
                        <th>Summary</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Assignee</th>
                        <th>CreatedAt</th>
                        <th>UpdatetdAt</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tickets.map(ticket => (
                            <tr key={ticket.id}>
                                <td><Link to={`/tickets/${ticket.id}`}>#{ticket.id}</Link></td>
                                <td>{ticket.project}</td>
                                <td>{ticket.Severity.severity}</td>
                                <td>{ticket.summary}</td>
                                <td>{ticket.description}</td>
                                <td>{ticket.Status.status}</td>
                                <td>{ticket.assignee}</td>
                                <td>{moment(ticket.createdAt).format('DD/MM/YYYY')}</td>
                                <td>{moment(ticket.updatedAt).format('DD/MM/YYYY')}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </div>
    );
};

export default Home;