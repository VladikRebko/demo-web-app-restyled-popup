import React, { Component } from 'react';
import { Router , Route } from 'react-router-dom';

import createBrowserHistory from "history/createBrowserHistory";

import Login from '../login';
import Grid from '../grid';

const history = createBrowserHistory({
  basename: '/'
});

class App extends Component{
    
  render(){
    return ( 
      <Router history={history}>
        <div className='demo-web-app' >
          
          <Route path="/" exact component={Login}/>
          <Route path="/grid" component={Grid}/>

        </div>
      </Router>
    );
  }
};

export {
  App, history
};