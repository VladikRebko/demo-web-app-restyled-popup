import React, { Component } from "react";
import data from './LeadsData.js';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Grid extends Component {
  state = {
    data: data
  }

  renderEditable = (cellInfo) => {
  
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        suppressContentEditableWarning
        onClick={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
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
          defaultPageSize={22}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
