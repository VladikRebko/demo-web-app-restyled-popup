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
        contentEditable
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
              Header: "ID",
              accessor: "ID",
              Cell: this.renderEditable,
              minWidth: 30
            },
            {
              Header: "First Name",
              accessor: "FirstName",
              Cell: this.renderEditable,
              minWidth: 90
            },
            {
              Header: "Last Name",
              accessor: "LastName",
              Cell: this.renderEditable,
              minWidth: 90
            },
            {
              Header: "Title",
              accessor: "Title",
              Cell: this.renderEditable,
              minWidth: 120
            },
            {
              Header: "BirthDay",
              accessor: "BirthDay",
              Cell: this.renderEditable,
              minWidth: 85
            },
            {
              Header: "Address",
              accessor: "Address",
              Cell: this.renderEditable,
              minWidth: 250
            },
            {
              Header: "City",
              accessor: "City",
              Cell: this.renderEditable,
              minWidth: 150
            },
            {
              Header: "Postal",
              accessor: "Postal",
              Cell: this.renderEditable
            },
            {
              Header: "Country",
              accessor: "Country",
              Cell: this.renderEditable,
              minWidth: 130
            },
            {
              Header: "Company",
              accessor: "Company",
              Cell: this.renderEditable,
              minWidth: 270
            },
            {
              Header: "Email",
              accessor: "Email",
              Cell: this.renderEditable,
              minWidth: 325
            },
            {
              Header: "Phone",
              accessor: "Phone",
              Cell: this.renderEditable,
              minWidth: 135
            },
            {
              Header: "Gender",
              accessor: "Gender",
              Cell: this.renderEditable,
              minWidth: 70
            },
            {
              Header: "Industry",
              accessor: "Industry",
              Cell: this.renderEditable,
              minWidth: 720
            },
            {
              Header: "WinChance",
              accessor: "WinChance",
              Cell: this.renderEditable,
              minWidth: 110 
            },
            {
              Header: "IsActive",
              accessor: "IsActive",
              Cell: this.renderEditable,
              minWidth: 70
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
            }
          ]}
          defaultPageSize={23}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
