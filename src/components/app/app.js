import React, { Component } from 'react';
import { Router , Route } from 'react-router-dom';

import { connect } from 'react-redux';

import createBrowserHistory from "history/createBrowserHistory";

import Login from '../login';
import Grid from '../grid';
import TablePopup from '../popup'

import { setIdOfTableRow } from '../../redux/actions/tableActions/tableActions';

const history = createBrowserHistory({
  basename: '/'
});

class App extends Component{
    
  render(){
    const { setIdOfTableRow, newtableData } = this.props;
    return ( 
      <Router history={history}>
        <div className='demo-web-app' >
          
          <Route path="/" exact component={Login}/>
          <Route path="/grid" component={Grid}/>
          <Route path="/details" exact component={TablePopup}/>
          <Route path="/details/:id" 
                 render= { ({ match }) =>{
                   const { id } = match.params;
                  setIdOfTableRow(id + '');
                   return( <TablePopup  newtableData={newtableData}/> )
                 }}/> 
        </div>
      </Router>
    );
  }
};

const mapStateToProps = (state) => {
	return {
    newtableData: state.popupReducer.tableData,
  };
}

export default connect(
  mapStateToProps,
  {
		setIdOfTableRow
  }
)(App);

export {
  history
};