import React, {useEffect, useState, useRef} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ticketService } from '../../_services/ticket.service'
import './ticket.css'

const TicketEdit = () => {
    const [ticket, setTicket] = useState([])
    const flag = useRef(false)
    let {tid} = useParams()
    let navigate = useNavigate()

    const onChange = (e) => {
        console.log(e.target.name, e.target.value)
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e) 
        navigate('./../../'+tid)
    }

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
            <form onSubmit={onSubmit}>
            <div className='summary'>
                <span>
                    <label className='issueLabel' htmlFor='id'>Ticket # : </label>
                    <input className='issueValue' type="text" name='id' value={ticket.id} onChange={onChange}/>
                </span>
                <span>
                    <label className='issueLabel' htmlFor='project'>Project : </label>
                    <input className='issueValue' type="text" name='project' value={ticket.project} onChange={onChange}/>
                </span>
                <span>
                    <label className='issueLabel' htmlFor='severity'>Severity : </label>
                    <input className='issueValue' type="text" name='severity' value={ticket.Severity?.severity || ''} onChange={onChange}/>
                </span>
                <span>
                    <label className='issueLabel' htmlFor='status'>Status : </label>
                    <input className='issueValue' type="text" name='status' value={ticket.Status?.status || ''} onChange={onChange}/>
                </span>
                <span>
                    <label className='issueLabel' htmlFor='assignee'>Assigned to : </label>
                    <input className='issueValue' type="text" name='assignee' value={ticket.assignee} onChange={onChange}/>
                </span>
                <span>
                    <label className='issueLabel' htmlFor='createdAt'>Created : </label>
                    <input className='issueValue' type="text" name='createdAt' value={moment(ticket.createdAt).format('DD/MM/YYYY HH:mm')} onChange={onChange}/>
                </span>
                <span>
                    <label className='issueLabel' htmlFor='updatedAt'>Updated : </label>
                    <input className='issueValue' type="text" name='updatedAt' value={moment(ticket.updatedAt).format('DD/MM/YYYY HH:mm')} onChange={onChange}/>
                </span>
            </div>
            <div className='detail'>
                <label className='issueLabel'>Summary : </label><label className='issueValue'>{ticket.summary}</label>
                <label className='issueLabel'>Description : </label><label className='issueValue'>{ticket.description}</label>
            </div>
            <div className='action'>
                <button>Update</button>
            </div>
            </form>
        </div>
    );
};

export default TicketEdit;