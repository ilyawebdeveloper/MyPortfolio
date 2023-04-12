import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyForm from './componets/MyForm/MyForm';
import MonPrice from './componets/MonPrice/MonPrice';
import Homepage from './componets/HomePage/Homepage';
import Cascad from './componets/Promcascad/Cascad';
import Letter from './componets/Letter/Letter';
import { Market } from './componets/Market/Market';
import World from './componets/MyCity/World';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/MonPrice" element={<MonPrice />} />
        <Route path="/MyForm" element={<MyForm /> } />
        <Route path="/Cascad" element={<Cascad /> } />
        <Route path="/Letter" element={<Letter /> } />
        <Route path="/Market" element={<Market /> } />
        <Route path='/World' element={<World/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
