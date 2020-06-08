import React from 'react';

function Stock(props) {
    return(
    <div className="storeItem">
        <p className="itemTitle">{props.title}</p>
        <p className="serialNumber">{props.serialNumber}</p>
        <p className="price">${props.price}</p>
        <p className="developer">{props.developer}</p>
        <p className="category">{props.category}</p>
        <button>Buy Item</button>
    </div>
);
}

export default Stock;