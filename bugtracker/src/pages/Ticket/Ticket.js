import React, {useEffect, useState, useRef} from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { ticketService } from '../../_services/ticket.service'
import './ticket.css'

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
                <span><label className='issueLabel'>Ticket # : </label><label className='issueValue'>{ticket.id}</label></span>
                <span><label className='issueLabel'>Project : </label><label className='issueValue'>{ticket.project}</label></span>
                <span><label className='issueLabel'>Severity : </label><label className='issueValue'>{ticket.Severity?.severity || ''}</label></span>
                <span><label className='issueLabel'>Status : </label><label className='issueValue'>{ticket.Status?.status || ''}</label></span>
                <span><label className='issueLabel'>Assigned to : </label><label className='issueValue'>{ticket.assignee}</label></span>
                <span><label className='issueLabel'>Created : </label><label className='issueValue'>{moment(ticket.createdAt).format('DD/MM/YYYY HH:mm')}</label></span>
                <span><label className='issueLabel'>Updated : </label><label className='issueValue'>{moment(ticket.updatedAt).format('DD/MM/YYYY HH:mm')}</label></span>
                <span><label className='issueLabel'>Category : </label><label className='issueValue'>Not Implemented</label></span>
            </div>
            <div className='detail'>
                <label className='issueLabel summary'>Summary : </label><label className='issueValue'>{ticket.summary}</label>
                <label className='issueLabel description'>Description : </label><label className='issueValue'>{ticket.description}</label>
            </div>
            <div className='action'>
                <Link to={`./../edit/${ticket.id}`}>Edit</Link> 
                <Link to={`./../edit/${ticket.id}`}>Delete</Link>
            </div>
        </div>
    );
};

export default Ticket;