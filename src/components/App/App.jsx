import { render } from "react-dom";
import React, { useState, Component } from "react";

function App () {

    const [order, setOrder] = useState(' ');
    const [firstName, setFirstName] = useState(' ');
    const [lastName, setLastName] = useState(' ');

    const login = (event) => {
        event.preventDefault();
        alert(`
        ${order}
        ${firstName}
        ${lastName}
            `);
        setOrder(' ');
        setFirstName(' ');
        setLastName(' ');
    }


    return (
        <div className="App">
            <h1>Heat Transfer Warehouse Custom Order Tracker</h1>
            <form>
                <p>Order Number</p><input type="text" value={order} onChange={(e) => setOrder(e.target.value)}></input>
                <p>First Name</p><input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                <p>Last Name</p><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                <br/>
                <br/>
                <button onClick={(e) => login(e)}>Login</button>
            </form>
        </div>
    )
}

export default App;