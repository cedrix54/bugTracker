import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Ticket from './Ticket';
import TicketEdit from './TicketEdit';
import TicketAdd from './TicketAdd';

import Home from './Home'

const TicketRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:tid" element={<Ticket />} />
                <Route path="/edit/:tid" element={<TicketEdit />} />
                <Route path="/create/" element={<TicketAdd />} />
            </Routes>
        </div>
    );
};

export default TicketRouter;