import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Profile from './Pages/Profile';
import Clients from './Pages/Clients';
import Dashboard from './Pages/Dashboard';
import Visitors from './Pages/Visitors';
import Bottom from './Components/Bottom';
import Enquiries from './Pages/Enquiries';
import ScrollToTop from './Components/ScrollToTop';
import Signup from './Pages/Signup';


function App() {


  return (
    <>

      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          
          <Route path='/' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/bottom' element={<Bottom />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/visitors' element={<Visitors />} />
          <Route path='/enquiries' element={<Enquiries />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
