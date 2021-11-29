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
        orderDisplay = 
        <>
        <h2>You have no orders to review at the time!</h2>
        <h3>Common reasons for this are:</h3>
        <ul>
            <li>Your Login info is incorrect. Make sure you are typing in the correct order #, and First and Last name that was put in the order! Capitalization matters!</li>
            <li>Your Order is not ready yet. You will get a notification via email and text when the order is ready for review!</li>
            <li>You have already submitted an approval/change request. If you requested changes, you will recieve a notification when your order is ready for review again!</li>
        </ul>
        </>
        ;
    } else if (info.order_number) {
        orderDisplay = 
        <>
        <h3>Hello, {info.first_name}!</h3>
        <h4>Your Order Number is: {info.order_number}.</h4>
        <h4>Your Email: {info.email}.</h4>
        <br/>
        <p>{info.comments}</p>
        <br/>
        <form action={info.pic} target="_blank">
            <input type="submit" value="View your Proof" />
        </form>
        <br/>
        <button>Approve</button>
        <button>Request Changes</button>
        </>;
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