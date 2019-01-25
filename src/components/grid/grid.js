import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';

import { setIdOfTableRow } from '../../redux/actions/tableActions/tableActions';


import ReactTable from "react-table";
import "react-table/react-table.css";

class Grid extends Component {
  
  renderEditable = (cellInfo) => {
    const elementId = cellInfo.index + 1; //We add 1 because our json data begin from index: 1
    const { setIdOfTableRow } = this.props;
    
    

    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        onClick={e => {

          const { history } = this.props;

          const newPath = `/popup/${elementId}`
          history.push(newPath);

          setIdOfTableRow(elementId);
        }}
        dangerouslySetInnerHTML={{
        	__html: this.props.tableData[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  render() {
    const { tableData } = this.props;

    // console.log(tableData);

    return (
      <div>
        <ReactTable
          data={tableData}
          pageSizeOptions= {[23, 25, 50]}
          columns={[
            {
              Header: "Company",
              accessor: "Company",
              Cell: this.renderEditable,
              minWidth: 270
            },
            {
              Header: "Last Name",
              accessor: "LastName",
              Cell: this.renderEditable,
              minWidth: 90
            },
            {
              Header: "First Name",
              accessor: "FirstName",
              Cell: this.renderEditable,
              minWidth: 90
            },
            {
              Header: "Email",
              accessor: "Email",
              Cell: this.renderEditable,
              minWidth: 325
            },
            {
              Header: "Amount",
              accessor: "Amount",
              Cell: this.renderEditable,
              minWidth: 80
            },
            {
              Header: "Currency",
              accessor: "Currency",
              Cell: this.renderEditable,
              minWidth: 80
            },
            {
              Header: "Win%",
              accessor: "WinChance",
              Cell: this.renderEditable,
              minWidth: 110 
            }
          ]}
          defaultPageSize={23}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tableData: state.popupReducer.tableData
  }
}

export default withRouter(connect(
  mapStateToProps,
  {
    setIdOfTableRow
  }
  )(Grid));