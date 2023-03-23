import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Ticket from './../../components/Ticket/Ticket'

const TicketRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="*" element={<Ticket />} />
            </Routes>
        </div>
    );
};

export default TicketRouter;