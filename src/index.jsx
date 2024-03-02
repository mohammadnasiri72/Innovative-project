import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Bob from './component/bob/bob'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowMenu from './component/showMenu/showMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/bobsponge' element={<Bob></Bob>}/>
        <Route path='/showMenu' element={<ShowMenu></ShowMenu>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


