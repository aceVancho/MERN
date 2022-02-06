import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './Components/App';
import Test from './Components/Test';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);
