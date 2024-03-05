import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Bob from './component/bob/bob'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowMenu from './component/showMenu/showMenu';
import ThemeColor from './component/themeColor/themeColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/bobsponge' element={<Bob></Bob>}/>
        <Route path='/showMenu' element={<ShowMenu></ShowMenu>}/>
        <Route path='/themeColor' element={<ThemeColor></ThemeColor>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


