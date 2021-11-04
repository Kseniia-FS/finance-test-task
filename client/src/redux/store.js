import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./ticker/tickerReducers";

const store = configureStore({
  reducer: {
    tickers: rootReducer,
  },
});

export { store };
