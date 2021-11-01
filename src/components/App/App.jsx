import { render } from "react-dom";
import React, { Component } from "react";

class App extends Component {

    render() {
    return (
        <div className="App">
            <p>Hello! My name is Luke.</p>
            <button>Click me!</button>
            <p>I've clicked the button 0 times.</p>
        </div>
    )
  }
}

export default App;