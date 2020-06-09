import React from 'react';

function Stock(props) {
    
    function handleClick() {
        return 10;
    }
    
    return(
    <div className="storeItem">
        <p className="itemTitle">Title: {props.title}</p>
        <p className="serialNumber">Serial Number: {props.serialNumber}</p>
        <p className="price">Price: ${props.price}</p>
        <p className="developer">Developer: {props.developer}</p>
        <p className="category">Category: {props.category}</p>
        <p className="quantity">Quantity: {props.quantity}</p>
        <p>Amount to Buy:</p><input type="number" className="quantity" min="1" max="10"></input> 
        <button onClick={handleClick}>Buy Item</button>
    </div>
);
}

export default Stock;