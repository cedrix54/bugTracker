import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Ticket from './Ticket';

import Home from './Home'

const TicketRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:tid" element={<Ticket />} />
            </Routes>
        </div>
    );
};

export default TicketRouter;