import React, {Component} from "react";
import Salutacio from "./Salutacio";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  
  handleClick = name =>  alert(`You look beautiful today, ${name}!`);

  increment = () => {
    this.setState ( 
      prevState => {
        return {
          count: prevState.count + 1
        }
    })
  }

  decrement = () => {
    this.setState (
      prevState => {
        return {
          count: prevState.count - 1
        }
      }
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Salutacio
          name="Montse"
          count={this.state.count}
          handleClick={this.handleClick}
          handleIncrement={this.increment}
          handleDecrement={this.decrement}
        />
      </div>
    );
  }
}

export default App;
