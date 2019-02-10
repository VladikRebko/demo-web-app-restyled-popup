import React, { Component } from 'react';
import { Router , Route } from 'react-router-dom';

import createBrowserHistory from "history/createBrowserHistory";

import Login from '../login';
import Grid from '../grid';
import TablePopup from '../popup'

const GRID_PATH = '/grid';
const DETAILS_PATH = '/details';
const HOME_PATH = '/';

const history = createBrowserHistory({
  basename: HOME_PATH
});

class App extends Component{
    
  render(){
    return ( 
      <Router history={history}>
        <div className='demo-web-app' >
          
          <Route path= {HOME_PATH} exact component={Login}/>
          <Route path= {GRID_PATH} component={Grid}/>
          <Route path= {DETAILS_PATH} exact component={TablePopup}/>
          <Route path= {`${DETAILS_PATH}/:id`} 
                 render= { () =>{
                   return( <TablePopup/> )
                 }}/> 
        </div>
      </Router>
    );
  }
};

export default App;

