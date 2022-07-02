import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RealApp from './RealApp';
import App from './App';
import reportWebVitals from './reportWebVitals'

/**import './index.css';**/ 
import  './assets/css/style.css';

ReactDOM.render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<RealApp />} />
    <Route path="App" element={<App />}/>
</Routes>
</BrowserRouter>
,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
