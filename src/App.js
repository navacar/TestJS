import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Orange from './components/Orange/Orange';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Footer />
      <Logo />
      <Orange />
    </div>
  );
}

export default App;
