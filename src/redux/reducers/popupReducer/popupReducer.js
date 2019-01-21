import { OPEN_POPUP } from '../../actions/popupActions/popupActions';
import data from '../../../components/grid/LeadsData.js';

const initialState = {
  tableData: [ ...data ]
};

const openPopup = ( state = initialState, action ) => {
  const { type, payload } = action;

	switch (type) {
    case OPEN_POPUP: {
      const { tableElement } = payload;

      return {
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

export default openPopup;