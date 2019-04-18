import React from 'react';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';

export default () => (
  <div className="App">
    <Header />
    <h1>Pokemon</h1>
    <CardList />
  </div>
);
