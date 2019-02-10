import { CHANGE_TABLE_DATA } from '../../actions/popupActions/popupActions.js';

import data from '../../../components/grid/LeadsData.js';

const initialState = {
  tableData: [ ...data ]
};

const popupReducer = ( state = initialState, action ) => {
  const { type, payload } = action;

	switch (type) {

    case CHANGE_TABLE_DATA: {
      const { changedCurrentRow } = payload;

			const ROW_ID = 'ID';
			
			return {
				tableData: state.tableData.map(element => element[ROW_ID] === changedCurrentRow[ROW_ID]
					? changedCurrentRow
					: element
				)
      };
    }

    default: {
      return state;
    }
  }
};

export default popupReducer;