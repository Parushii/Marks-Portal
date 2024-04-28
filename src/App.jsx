import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Student from './components/Student.jsx';
import Subject from './components/Subject.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/student" element={<Student />}/>
        <Route path="/subject" element={<Subject />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
