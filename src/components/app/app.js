import React, { Component } from 'react';
import { Router , Route } from 'react-router-dom';

import createBrowserHistory from "history/createBrowserHistory";

import Login from '../login';
import Grid from '../grid';
import TablePopup from '../popup'

import './app.css'

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
          <Route path="/popup" exact component={TablePopup}/>
          {/* <Route path="/popup/:id" 
                 render= { ({ match }) =>{

                  const { id } = match.params;
                  //  console.log( match );
                   return( <TablePopup itemId={id}/> )
                  }}/> */}

        </div>
      </Router>
    );
  }
};

export {
  App, history
};