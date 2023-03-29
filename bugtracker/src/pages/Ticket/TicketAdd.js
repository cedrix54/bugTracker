import React, {useEffect, useState, useRef} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ticketService } from '../../_services/ticket.service'
import { referenceService } from '../../_services/reference.service'
import './ticket.css'
import TextBox from '../../components/TextBox';
import DropDown from '../../components/DropDown';
import TextArea from '../../components/TextArea';

const TicketEdit = () => {
    const [ticket, setTicket] = useState([])
    const [severity, setSeverity] = useState([])
    const [status, setStatuses] = useState([])
    const flag = useRef(false)
    let navigate = useNavigate()

    const onChange = (e) => {
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        ticketService.createTicket(ticket)
            .then(res => navigate('./../')
            .catch(err => console.log(err))
        )
    }
    
    const onCancel = (e) => {
        e.preventDefault()
        navigate('./../')
    }


    useEffect(() => {
        if(flag.current === false){
            referenceService.getAllSeverities()
                .then(res => setSeverity(res.data.data))
                .catch(err => console.log(err))
            referenceService.getAllStatuses()
                .then(res => setStatuses(res.data.data))
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
                        <label className='issueLabel'>Project : </label>
                        <label className='issueValue'>1</label>
                    </span>
                    <DropDown title='Severity' id='severity' valueList={severity} valuesId='severity' onChange={onChange}/>
                    <DropDown title='Status' id='status' valueList={status} valuesId='status' onChange={onChange}/>
                    <span>
                        <label className='issueLabel' htmlFor='assignee'>Assigned to : </label>
                        <input className='issueValue' type="text" name='assignee'onChange={onChange}/>
                    </span>
                </div>
                <div className='detail'>
                    <TextBox title='Summary' id='summary' value={ticket.summary} onChange={onChange}/>
                    <TextArea title='Description' id='description' value={ticket.description} onChange={onChange}/>
                </div>
                <div className='action'>
                    <button>Create</button>
                    <button className='btn' onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default TicketEdit;