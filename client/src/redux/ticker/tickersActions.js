import { createAction } from "@reduxjs/toolkit";

export const changeTickerSuccess = createAction("ticker/changeTickerSuccess");
export const changeTickerError = createAction("ticker/changeTickerError");
export const getCheckedTicker = createAction("ticker/getCheckedTicker");
