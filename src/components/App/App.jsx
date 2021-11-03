import { render } from "react-dom";
import React, { useState, Component } from "react";
import { useDispatch } from 'react-redux';

function App () {

    const dispatch = useDispatch();

    const [order, setOrder] = useState(' ');
    const [firstName, setFirstName] = useState(' ');
    const [lastName, setLastName] = useState(' ');

    const login = (event) => {
        event.preventDefault();
        dispatch({
        type: 'ATTEMPT_LOGIN', 
        payload: {
            order: order,
            firstName: firstName,
            lastName: lastName,
        }})
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