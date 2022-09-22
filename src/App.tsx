import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Contatos } from './pages/Contatos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
function App(){
  return (
  <>
  <BrowserRouter>
  <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
      <Route path='/contatos' element={<Contatos/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
