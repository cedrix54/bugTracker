import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import PublicRouter from './pages/Public/PublicRouter';
import TicketRouter from './pages/Ticket/TicketRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter /> }/>
          <Route path="/tickets/*" element={<TicketRouter /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
