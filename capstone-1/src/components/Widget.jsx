import React, { Component } from 'react'
import styled from 'styled-components'
import {ProductConsumer} from './Context'
import {ButtonContainer} from './Button'
import {Link} from 'react-router-dom'

export default class Widget extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {widgetOpen, closeWidget} = value;
                    const {imgURL, title, price} = value.widgetProduct;

                    if(!widgetOpen) {
                        return null;
                    }
                    else {
                        return (<WidgetContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="widget" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                        <h5>
                                            Item added to the cart
                                        </h5>
                                        <img src={imgURL} className="img-fluid" alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: ${price}</h5>
                                        <Link to='/'>
                                            <ButtonContainer onClick={()=>closeWidget()}>
                                                Store
                                            </ButtonContainer>
                                        </Link>
                                        <Link to='/cart'>
                                            <ButtonContainer cart onClick={()=>closeWidget()}>
                                                Go To Cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </WidgetContainer>
                        );
                    } 
                }}
            </ProductConsumer>
        );
    }
}

const WidgetContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#widget{
    background:var(--mainWhite);
}
`