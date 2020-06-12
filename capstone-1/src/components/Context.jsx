import React, { Component } from "react";
import {info, detailProduct} from '../info';
const ProductContext = React.createContext();


class ProductProvider extends Component {
    state={
        products:[],
        detailProduct: detailProduct,
        cart: [],
        widgetOpen: false,
        widgetProduct: detailProduct,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal:0,
        filterDisplay:[],
        search:""
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () =>{
        let products = [];
        info.forEach(item => {
            const singleItem = {...item};
            products = [...products, singleItem];

        })
        this.setState(() => {
            return {products:products}
        })
    }

    getItem = (key) =>{
        const product = this.state.products.find(item => item.key === key);
        return product;
    }

    handleDetail = (key) => {
            const product = this.getItem(key);
            this.setState(() => {
                return {detailProduct:product}
            })
    }
    addToCart = (key) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(key))
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {products:tempProducts, cart:[...this.state.cart, 
            product]}
        }, () => {this.addTotals()})
    }

    openWidget = key => {
        const product = this.getItem(key);
        this.setState(() => {
            return {widgetProduct:product, widgetOpen:true}
        })
    }

    closeWidget = () => {
        this.setState(() => {
            return {widgetOpen:false}
        })
    }
    increment= (key) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.key === key);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(()=>{return{cart:[...tempCart]}}, ()=>{this.addTotals()})
        
    }
    decrement= (key) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.key === key);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;
        if(product.count === 0){
            this.removeItem(key);
        } else{
            product.total = product.count * product.price;
            this.setState(()=>{return{cart:[...tempCart]}}, ()=>{this.addTotals()})
        }
        
    }
    removeItem= (key) =>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.key !== key);
        const index = tempProducts.indexOf(this.getItem(key));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.inCart = 0;
        removedProduct.inCart = 0;

        this.setState(() => {
            return {
                cart:[...tempCart],
                products:[...tempProducts]
            }
        }, ()=>{
            this.addTotals();
        })
    }
    clearCart = () =>{
        this.setState(() => {
            return { cart: [] };
        }, ()=>{
            this.setProducts();
            this.addTotals();
        })
    }
    addTotals= () =>{
        let subTotal = 0;
        this.state.cart.map(item =>(subTotal += item.total));
        const tempTax = subTotal * 0.2;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal:subTotal,
                cartTax:tax,
                cartTotal:total
            }
        })
    }
    handleInput = (input) => {
        console.log(input)
        this.setState(() => {
           return {search:input}
        }, this.handleSearch(input))
    }

   handleSearch = (e) => {
        if (this.state.search !== "") {
          let newList = [];
          console.log(this.state.products);
          this.state.products.map(product => {
            const title = product.title.toLowerCase()
            console.log(title);
            const serial = product.serialNumber
            console.log(this.state.search)
              if (title.includes((this.state.search))) {
                return newList.push(product)
              }
              else if (serial.toString().search(e)!== -1){
                newList.push(product)
              }
              else if (serial.toString().search(e)!== -1){
                newList.push(product)
              }
              else {console.log("nomatch")};
          })
          this.setState({filterDisplay:newList});
        } 
           }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openWidget:this.openWidget,
                closeWidget:this.closeWidget,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart,
                // search:this.search,
                handleSearch:this.handleSearch,
                handleInput:this.handleInput 
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };