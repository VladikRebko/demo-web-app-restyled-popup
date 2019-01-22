import { SET_TABLE_ROW } from '../../actions/tableActions/tableActions.js';
import data from '../../../components/grid/LeadsData.js';

const initialState = {
  tableData: [ ...data ],
  tableCurrentRow: data[1]
};

const tableReducer = ( state = initialState, action ) => {
  const { type, payload } = action;

	switch (type) {

    case SET_TABLE_ROW: {
      const { tableCurrentRow } = payload;

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

export default tableReducer;