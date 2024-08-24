import { configureStore } from "@reduxjs/toolkit";
import { goodsApi } from "./api";
export const store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
  },
  middleware: (gDM) => gDM().concat(goodsApi.middleware),
});
