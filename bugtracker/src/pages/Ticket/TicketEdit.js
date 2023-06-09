import React, {useEffect, useState, useRef} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ticketService } from '../../_services/ticket.service'
import { referenceService } from '../../_services/reference.service'
import './ticket.css'
import TextBox from '../../components/TextBox';
import DropDown from '../../components/DropDown';

const TicketEdit = () => {
    const [ticket, setTicket] = useState([])
    const [severity, setSeverity] = useState([])
    const [status, setStatuses] = useState([])
    const flag = useRef(false)
    let {tid} = useParams()
    let navigate = useNavigate()

    const onChange = (e) => {
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        ticketService.updateTicket(ticket)
            .then(res => navigate('./../../')
            .catch(err => console.log(err))
        )
    }
    
    const onCancel = (e) => {
        e.preventDefault()
        navigate('./../../')
    }


    useEffect(() => {
        if(flag.current === false){
            referenceService.getAllSeverities()
                .then(res => setSeverity(res.data.data))
                .catch(err => console.log(err))
            referenceService.getAllStatuses()
                .then(res => setStatuses(res.data.data))
                .catch(err => console.log(err))
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
                    <span><label className='issueLabel'>Ticket # : </label><label className='issueValue'>{ticket.id}</label></span>
                    <span>
                        <label className='issueLabel'>Project : </label>
                        <label className='issueValue'>{ticket.project}</label>
                    </span>
                    <DropDown title='Severity' id='severity' valueList={severity} value={ticket.severity} valuesId='severity' onChange={onChange}/>
                    <DropDown title='Status' id='status' valueList={status} value={ticket.status} valuesId='status' onChange={onChange}/>
                    <span>
                        <label className='issueLabel' htmlFor='assignee'>Assigned to : </label>
                        <input className='issueValue' type="text" name='assignee' value={ticket.assignee} onChange={onChange}/>
                    </span>
                    <span><label className='issueLabel'>Created : </label><label className='issueValue'>{moment(ticket.createdAt).format('DD/MM/YYYY HH:mm')}</label></span>
                    <span><label className='issueLabel'>Updated : </label><label className='issueValue'>{moment(ticket.updatedAt).format('DD/MM/YYYY HH:mm')}</label></span>
                </div>
                <div className='detail'>
                    <TextBox title='Summary' id='summary' value={ticket.summary} onChange={onChange}/>
                    <TextBox title='Description' id='description' value={ticket.description} onChange={onChange}/>
                </div>
                <div className='action'>
                    <button>Update</button>
                    <button onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default TicketEdit;