import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import Login from '../login';
import Grid from '../grid'
export default class App extends Component{
    
  render(){
    return ( 
      <BrowserRouter>
        <div className='demo-web-app' >
          
          <Route path="/" exact component={Login}/>
          <Route path="/grid" component={Grid}/>

        </div>
      </BrowserRouter>
    );
  }
};