import React  from 'react'
import {ProductConsumer} from './Context';

const Searchbar = (props) =>{
    return ( 
            <ProductConsumer>
                {(value) => {
                    return(   
            <div>
                <input type="text" placeholder="Search for anything!" onChange={(e) => {
                     console.log(e.target.value);
                    value.handleInput(e.target.value)}}/>
            </div>
            )
        }}
            </ProductConsumer>
        );
}
export default Searchbar;