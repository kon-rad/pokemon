import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CardList from './components/CardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Pokemon</h1>
        <CardList />
        Pokemon
      </div>
    );
  }
}

export default App;
