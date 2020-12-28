import React, {Component} from "react";

class Salutacio extends Component {

    handleClick = () => this.props.handleClick(this.props.name);

    render(){
        return(
            <div>
            <h1>Hello {this.props.name}!</h1>
            <button onClick={this.handleClick}>
                Click me!
            </button>
            </div>
        )
    }
}

export default Salutacio;