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
        onDoubleClick={e => {
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
              Cell: this.renderEditable
            },
            {
              Header: "FirstName",
              accessor: "FirstName",
              Cell: this.renderEditable
            },
            {
              Header: "LastName",
              id: "LastName",
              Cell: this.renderEditable
            },
            {
              Header: "Title",
              accessor: "Title",
              Cell: this.renderEditable
            },
            {
              Header: "BirthDay",
              accessor: "BirthDay",
              Cell: this.renderEditable
            },
            {
              Header: "Address",
              accessor: "Address",
              Cell: this.renderEditable
            },
            {
              Header: "City",
              accessor: "City",
              Cell: this.renderEditable
            },
            {
              Header: "Postal",
              accessor: "Postal",
              Cell: this.renderEditable
            },
            {
              Header: "Country",
              accessor: "Country",
              Cell: this.renderEditable
            },
            {
              Header: "Company",
              accessor: "Company",
              Cell: this.renderEditable
            },
            {
              Header: "Email",
              accessor: "Email",
              Cell: this.renderEditable
            },
            {
              Header: "Phone",
              accessor: "Phone",
              Cell: this.renderEditable
            },
            {
              Header: "Gender",
              accessor: "Gender",
              Cell: this.renderEditable
            },
            {
              Header: "Industry",
              accessor: "Industry",
              Cell: this.renderEditable
            },
            {
              Header: "WinChance",
              accessor: "WinChance",
              Cell: this.renderEditable
            },
            {
              Header: "IsActive",
              accessor: "IsActive",
              Cell: this.renderEditable
            },
            {
              Header: "Amount",
              accessor: "Amount",
              Cell: this.renderEditable
            },
            {
              Header: "Currency",
              accessor: "Currency",
              Cell: this.renderEditable
            }
          ]}
          defaultPageSize={data.length}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
