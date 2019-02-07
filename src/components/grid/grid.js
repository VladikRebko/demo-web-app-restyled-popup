import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import { connect } from 'react-redux';

import ReactTable from "react-table";
import "react-table/react-table.css";

class Grid extends Component {
  
  renderEditable = (cellInfo) => {
    const elementId = cellInfo.index + 1; //We add 1 because our json data begin from index: 1

    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        onClick={ () => {

          const { history } = this.props;

          const newPath = `/details/${elementId}`
          history.push(newPath);

        }}
        dangerouslySetInnerHTML={{
        	__html: this.props.tableData[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  render() {
    const { tableData } = this.props;

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
              minWidth: 150
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
              minWidth: 150
            },
            {
              Header: "Amount",
              accessor: "Amount",
              Cell: this.renderEditable,
              minWidth: 50
            },
            {
              Header: "Currency",
              accessor: "Currency",
              Cell: this.renderEditable,
              minWidth: 40
            },
            {
              Header: "Win%",
              accessor: "WinChance",
              Cell: this.renderEditable,
              minWidth: 40 
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
  mapStateToProps
  )(Grid));