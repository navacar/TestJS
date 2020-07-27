import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Orange from './components/Orange/Orange';
import Blue from './components/Blue/Blue';
import BigContainer from './components/BigContainer/BigContainer';
import Table from './components/Table/Table';
import {Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Redirect from="/" to="/All/SecondAll" />
      <Header />
      <NavBar />
      <Footer />
      <Logo />
      <Orange />
      <Blue />
      <BigContainer />
      <Table />
    </div>
  );
}

export default App;
