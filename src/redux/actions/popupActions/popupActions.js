export const SHOW_POPUP = 'SHOW_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';

export const showPopup = (isPopupOpen, tableElementId) => ({
  type: SHOW_POPUP,
  payload: {
    isPopupOpen,
    tableElementId
  }
});

export const hidePopup = (isPopupOpen) => ({
  type: HIDE_POPUP,
  payload: {
    isPopupOpen
  }
});