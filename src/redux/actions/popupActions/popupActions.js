export const OPEN_POPUP = 'OPEN_POPUP';

export const changeTableData = (tableElement) => ({
  type: OPEN_POPUP,
  payload: {
    tableElement
  }
});