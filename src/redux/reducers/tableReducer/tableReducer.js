import { CHANGE_TABLE_DATA } from '../../actions/tableActions/tableActions.js';
import data from '../../../components/grid/LeadsData.js';

const initialState = {
  tableData: [ ...data ]
};

const popupTable = ( state = initialState, action ) => {
  const { type, payload } = action;

	switch (type) {
    case CHANGE_TABLE_DATA: {
      const { tableElement } = payload;

      return {
        ...state,
        tableData: state.tableData.map(element => element['ID'] === tableElement['ID']
          ? tableElement
          : element
        )
      }
    }
    default: {
      return state;
    }
  }
};

export default popupTable;