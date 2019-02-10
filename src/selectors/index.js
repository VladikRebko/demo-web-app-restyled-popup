import { createSelector } from "reselect";

const getData = state => state.popupReducer.tableData;

export const getAllData = createSelector(
  [getData],
  ( data ) => {
    return data;
  }
);