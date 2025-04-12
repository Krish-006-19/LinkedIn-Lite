import React from 'react'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import App from './App'
import Register from './features/Register'
import Login from './features/Login'

export default function App1() {
  return <BrowserRouter>
        <Routes>

          <Route 
          path='/'
          element={<Navigate to="/MyLinkedin" />} />  

          <Route 
          path='/MyLinkedin'
          element={<App />} />

          <Route
          path='/MyLinkedin/' 
          element={<App />} />

          <Route 
          path='/MyLinkedin/signin' 
          element={<Login/>}/>

          <Route 
          path='/MyLinkedin/register' 
          element={<Register />} />

        </Routes>
      </BrowserRouter>
}