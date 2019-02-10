export const CHANGE_TABLE_DATA = 'CHANGE_TABLE_DATA';

export const changeTableData = (changedCurrentRow) => ({
  type: CHANGE_TABLE_DATA,
  payload: {
    changedCurrentRow
  }
});