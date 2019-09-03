import React, { Component } from 'react';
import './assets/css/Main.css';
import Header from './components/Header/Header';
import Main from './pages/Main'
import Menu from "./components/Menu/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Menu />
      </div>
    );
  }
}

export default App;
