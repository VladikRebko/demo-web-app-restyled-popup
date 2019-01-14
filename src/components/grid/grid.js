import React, { Component } from "react";
// import data from './LeadsData.js';
import TablePopup from '../popup'
import { connect } from 'react-redux';

import { showPopup } from '../../redux/actions/popupActions/popupActions.js';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Grid extends Component {
  renderEditable = (cellInfo) => {
    const { showPopup } = this.props;
    const elementId = cellInfo.index + 1; //We add 1 because our json data begin from index: 1

    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        onClick={e => {
          showPopup(true, elementId);
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
        <TablePopup />
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

export default connect(
    (state) => ({ tableData: state.tableReducer.tableData }),
    { showPopup }
)(Grid);