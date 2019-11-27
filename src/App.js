import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';

import { checkUserSession } from './redux/user/user-actions';

import Navbar from './components/layout/Navbar/Navbar';
import MainPage from './components/pages/MainPage/MainPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import ProductsPage from './components/pages/ProductsPage/ProductsPage';
import Footer from './components/layout/Footer';

import './styles.css'
import CheckoutPage from './components/pages/CheckOutPage/CheckoutPage';


const App = ({ checkUserSession, currentUser }) => { 
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/products' component={ProductsPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/login' render={() => 
          currentUser ? (
            <Redirect to='/' />
          ) : (  
            <LoginPage /> 
          )  
        } />
      </Switch>
      <Footer />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
