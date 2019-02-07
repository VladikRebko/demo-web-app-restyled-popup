export const CHANGE_TABLE_DATA = 'CHANGE_TABLE_DATA';
export const GET_CURRENT_ROW = 'GET_CURRENT_ROW';

export const changeTableData = (changedCurrentRow) => ({
  type: CHANGE_TABLE_DATA,
  payload: {
    changedCurrentRow
  }
});

export const getCurrentRow = (idOfcurrentRow) => ({
  type: GET_CURRENT_ROW,
  payload: {
    idOfcurrentRow
  }
});