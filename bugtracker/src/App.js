import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import PublicRouter from './pages/Public/PublicRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
