import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  changeTickerSuccess,
  changeTickerError,
  getCheckedTicker,
} from "./tickersActions";
const initialState = [];

const tickerReducer = createReducer(initialState, {
  [changeTickerSuccess]: (_, { payload }) => [...payload],
});
const errorReducer = createReducer("", {
  [changeTickerError]: (_, { payload }) => payload,
});
const checkedTickers = createReducer([], {
  [getCheckedTicker]: (_, { payload }) => [...payload],
});

export const rootReducer = combineReducers({
  tickerReducer,

  checkedTickers,
  errorReducer,
});
