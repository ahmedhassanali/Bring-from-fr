import { configureStore } from "@reduxjs/toolkit";
import StoresSlice from "./slices/StoresSlice";

export const store = configureStore({
    reducer: {
        stores : StoresSlice,
    },
})