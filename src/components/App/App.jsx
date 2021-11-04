import { render } from "react-dom";
import React, { useState, Component } from "react";
import { useSelector, useDispatch } from 'react-redux';

function App () {

    const info = useSelector(store => store.info);
    const dispatch = useDispatch();

    const [order, setOrder] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const login = (event) => {
        event.preventDefault();
        dispatch({
        type: 'ATTEMPT_LOGIN', 
        payload: {
            order: order,
            firstName: firstName,
            lastName: lastName,
        }})
        setOrder('');
        setFirstName('');
        setLastName('');
    }

    let orderDisplay;

    if (info.order_number === 'FAIL') {
        orderDisplay = `INCORRECT INFORMATION! TRY AGAIN!`;
    } else if (info.order_number) {
        orderDisplay = `
        Hello, ${info.first_name}!
        Your Order Number is: ${info.order_number}.
        Your Email: ${info.email}.

        ${info.product_options};
        <button href="${info.product_options}">View your Proof</button>

        <button>Approve</button>
        <button>Request Changes</button>
        `;
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
            <div>
                {orderDisplay}
            </div>
        </div>
    )
}

export default App;