import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/index.tsx';
import Dashboard from './pages/Dashboard/index.tsx';
import HomePage from './pages/HomePage/index.tsx';
import User from "./pages/User/index.tsx";
import './App.css';

function App() {
  
  return (
   <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route path='/home' element={<Dashboard/>}/>
     <Route path='/homePage' element={<HomePage/>}/>
     <Route path="/user/list" element={<User/>}/>
     <Route path='/' element={<Navigate to='/Login'/>}/>
   </Routes>
  );
}

export default App;
