import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>  
  </StrictMode>,
)
  {/* <BrowserRouter>
    <Routes> 
       <Route path="/" element={<App />} /> 
     </Routes>
  </BrowserRouter> */}