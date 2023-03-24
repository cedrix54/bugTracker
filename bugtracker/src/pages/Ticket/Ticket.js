import React, {useEffect, useState, useRef} from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { ticketService } from '../../_services/ticket.service'

const Ticket = () => {
    const [ticket, setTicket] = useState([])
    const flag = useRef(false)
    let {tid} = useParams()

    useEffect(() => {
        if(flag.current === false){
            ticketService.getTicket(tid)
                .then(res => setTicket(res.data.data))
                .catch(err => console.log(err))
        }

        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='ticket'>
            <p>Issue Détails : </p>
            <div className='summary'>
                <label>Ticket # : </label><input type='text' disabled value={ticket.id} />
                <label>Project # : </label><input type='text' disabled value={ticket.project} /><br />
                <label>Severity : </label><input type='text' disabled value={ticket.Severity?.severity || ''} />
                <label>Status : </label><input type='text' disabled value={ticket.Status?.status || ''} /><br />
                <label>Assigned to : </label><input type='text' disabled value={ticket.assignee} /><br />
                <label>Created : </label><input type='text' disabled value={moment(ticket.createdAt).format('DD/MM/YYYY HH:mm')} />
                <label>Updated : </label><input type='text' disabled value={moment(ticket.updatedAt).format('DD/MM/YYYY HH:mm')} />
            </div>
            <div className='summary'>
                <label>Summary : </label><input type='text' disabled value={ticket.summary} /><br />
                <label>Description : </label><br /><textarea type='text' disabled value={ticket.description} rows="5" cols="50"/>
            </div>
            <div className='action'>
                <Link to={`/admin/cocktail/edit/${ticket.id}`}>Update</Link>
                <Link to={`/admin/cocktail/edit/${ticket.id}`}>Delete</Link>
            </div>
        </div>
    );
};

export default Ticket;