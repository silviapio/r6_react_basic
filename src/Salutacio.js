import React, {Component} from "react";
import "./Salutacio.css"

class Salutacio extends Component {

    handleClick = () => this.props.handleClick(this.props.name);

    render(){
        return(
            <div>
            <h1>Hello {this.props.name}!</h1>
            <button 
                style={{color: "#282c34", fontFamily: "Roboto, sans-serif", fontSize: "1.2em"}} 
                onClick={this.handleClick}>
                    Click me!
            </button>
            <div 
                style={{marginTop: 30, paddingTop: 20, fontFamily: "Roboto, sans-serif", fontSize: "2em", fontWeight: "bolder"}}>
                    <p>{this.props.name}, count!</p>
                    {this.props.count}
            </div>
            <button 
                style={{margin: 10, color: "#282c34", fontFamily: "Roboto, sans-serif", fontSize: "1.2em"}} 
                onClick={this.props.handleIncrement}>
                    Increment
            </button>
            <br />
            <button 
                style={{margin: 10, color: "#282c34", fontFamily: "Roboto, sans-serif", fontSize: "1.2em"}} 
                onClick={this.props.handleDecrement}>
                    Decrement
            </button>
            </div>
        )
    }
}

export default Salutacio;