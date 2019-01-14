import { SHOW_POPUP, HIDE_POPUP } from '../../actions/popupActions/popupActions.js';

const initialState = {
  isPopupOpen: false,
  tableRowId: null
};

const popupReducer = ( state = initialState, action ) => {
  const { type, payload } = action;

	switch (type) {
    case SHOW_POPUP: {
      const { isPopupOpen, tableElementId } = payload;

			return {
        ...state,
        isPopupOpen: isPopupOpen,
        tableRowId: tableElementId
      }
    }
    case HIDE_POPUP: {
      const { isPopupOpen } = payload;

			return {
        ...state,
        isPopupOpen
      }
    }
    default: {
      return state;
    }
  }
};

export default popupReducer;