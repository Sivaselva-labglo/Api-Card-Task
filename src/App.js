import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GetDatas from './getDatas';
import Showdata from './showData';

function App() {
  return (
   
    <Router>
      <Routes>
        <Route exact path='/' element={<GetDatas/>} />
        <Route exact path='/showdata/:id' element={<Showdata/>} />
      </Routes>
    </Router>
  );
}

export default App;
