export const CHANGE_TABLE_DATA = 'CHANGE_TABLE_DATA';

export const changeTableData = (tableElement) => ({
  type: CHANGE_TABLE_DATA,
  payload: {
    tableElement
  }
});