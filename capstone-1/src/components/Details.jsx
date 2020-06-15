import React, { Component } from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {key, title, imgURL, developer, serialNumber, price, category, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={imgURL} className="img-fluid" alt="product"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                  <h1>Developed by: {developer}</h1>  
                                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Serial Number:{serialNumber}</h4>
                                  <h4 className="text-blue">
                                      <strong>
                                          price: <span>$</span>{price}
                                      </strong>
                                  </h4>
                                  <p>Category: {category}</p>
                                  <div>
                                      <Link to='/'>
                                        <ButtonContainer>
                                            Back To Product Page
                                        </ButtonContainer>
                                      </Link>
                                      <ButtonContainer
                                      cart
                                      disabled={inCart ? true : false}
                                      onClick={()=>{
                                          value.addToCart(key)
                                          value.openWidget(key)
                                      }}>
                                          {inCart ? 'inCart' : 'add to cart'}
                                      </ButtonContainer>
                                  </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
