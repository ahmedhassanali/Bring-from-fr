import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from "./slices/CategoriesSlice";
import StoresSlice from "./slices/StoresSlice";

export const store = configureStore({
    reducer: {
        stores : StoresSlice,
        categories: CategoriesSlice,
    },
})