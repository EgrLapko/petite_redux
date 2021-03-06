import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import ScrollTop from 'react-scrolltop-button';

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

// Check
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
      <ScrollTop 
        text="to top"
        className="scroll-to-top"
        style={{ 
            backgroundColor: "rgba(241, 106, 123, .8)",
            border: "none",
            borderRadius: "10px",
            fontFamily: "'Roboto', sans-serif",
          }}
      />
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
