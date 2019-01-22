export const SET_TABLE_ROW = 'SET_TABLE_ROW';

export const setTableRow = (tableCurrentRow) => ({
  type: SET_TABLE_ROW,
  payload: {
    tableCurrentRow
  }
});
