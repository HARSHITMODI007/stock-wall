import React from 'react';
import Cardlist from './components/Cardlist';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <Cardlist />
      <Footer/>
    </div>
  );
}

export default App;