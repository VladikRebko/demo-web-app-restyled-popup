import { CHANGE_TABLE_DATA, GET_CURRENT_ROW } from '../../actions/popupActions/popupActions.js';
import data from '../../../components/grid/LeadsData.js';

const initialState = {
  tableData: [ ...data ]
};

const popupReducer = ( state = initialState, action ) => {
  const { type, payload } = action;
  const tableData = [...state.tableData];

	switch (type) {

    case CHANGE_TABLE_DATA: {
      const { changedCurrentRow } = payload;
      
      const newTableData = tableData.map(element => element['ID'] === changedCurrentRow['ID']
        ? changedCurrentRow
        : element
      );

     console.log(newTableData);

      return {
        tableData: newTableData
      };
    }

    case GET_CURRENT_ROW: {

      const { idOfcurrentRow } = payload;

      const tableCurrentRow = tableData.find(element => {
        return Number(element.ID) === Number(idOfcurrentRow);
      });


      console.log(tableData);

      return {
        ...state,
        tableCurrentRow
      }
    }

    default: {
      return state;
    }
  }
};

export default popupReducer;