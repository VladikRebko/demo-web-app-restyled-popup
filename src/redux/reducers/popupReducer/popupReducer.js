import { CHANGE_TABLE_DATA } from '../../actions/popupActions/popupActions.js';
import data from '../../../components/grid/LeadsData.js';

const initialState = {
  tableData: [ ...data ],
  tableCurrentRow: data[0]
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

      return {
        ...state,
        tableData: newTableData
      };
    }

    default: {
      return state;
    }
  }
};

export default popupReducer;