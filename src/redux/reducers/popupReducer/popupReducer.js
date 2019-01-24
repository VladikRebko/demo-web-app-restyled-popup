import { CHANGE_TABLE_DATA } from '../../actions/popupActions/popupActions.js';
import data from '../../../components/grid/LeadsData.js';

const initialState = {
  tableData: [ ...data ]
};

const popupReducer = ( state = initialState, action ) => {
  const { type, payload } = action;

	switch (type) {

    case CHANGE_TABLE_DATA: {
      const { newTableData } = payload;

      return {
        tableData: newTableData
      };
    }

    default: {
      return state;
    }
  }
};

export default popupReducer;