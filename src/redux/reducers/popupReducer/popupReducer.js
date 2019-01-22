import { CHANGE_TABLE_DATA } from '../../actions/popupActions/popupActions.js';

const initialState = {
  tableCurrentRow: null
};

const popupReducer = ( state = initialState, action ) => {
  const { type, payload } = action;

	switch (type) {

    case CHANGE_TABLE_DATA: {
      const { tableCurrentRow } = payload;

      return {
        ...state,
        tableData: state.tableData.map(element => element['ID'] === tableCurrentRow['ID']
          ? tableCurrentRow
          : element
        )
      }
    }

    default: {
      return state;
    }
  }
};

export default popupReducer;