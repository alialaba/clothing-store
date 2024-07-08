import { useState } from 'react';
import './App.css';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {

  return (
    <main>
      <Header/>
      <Home/>
      <Footer/>
    </main>
  )
}

export default App
