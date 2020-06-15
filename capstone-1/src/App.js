import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import info from './info';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Widget from './components/Widget';
import Searchbar from './components/Searchbar';

class App extends Component {
render() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route exact path="/search" component={Searchbar}/>
        <Route component={Default}/>
      </Switch>
      <Widget />
    </React.Fragment>
  );
  }
}

export default App;
