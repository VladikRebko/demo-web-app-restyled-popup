export const CHANGE_TABLE_DATA = 'CHANGE_TABLE_DATA';

export const changeTableData = (newTableData) => ({
  type: CHANGE_TABLE_DATA,
  payload: {
    newTableData
  }
});