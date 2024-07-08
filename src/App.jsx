import { useState } from 'react';
import './App.css';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer';

function App() {

  return (
    <main>
      <Home/>
      <Footer/>
    </main>
  )
}

export default App
