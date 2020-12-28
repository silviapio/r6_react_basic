import React, {Component} from "react";
import Salutacio from "./Salutacio";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  handleClick = name =>  alert(`You look beautiful today, ${name}!`);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Salutacio name="Montse" handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
