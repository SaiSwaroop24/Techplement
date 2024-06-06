import React from 'react'
import Login from './components/LogIn&Signup/Login'
import Signup from './components/LogIn&Signup/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import AutherQ from './components/Main/AutherQ';
import KeywordQ from './components/Main/KeywordQ';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/main/:name' element={<Main/>}/>
      <Route path='/quotes/:author' element={<AutherQ/>}/>
      <Route path='/keyword/:keywords' element={<KeywordQ/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
