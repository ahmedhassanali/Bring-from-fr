import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from '../../data/StoresData'
export const fetchStores = createAsyncThunk(
    "StoresSlice/fetchStores",
    async () => {
        // const res = await fetch("https://fakestoreapi.com/Stores");
        // const data = await res.json();
        return data;
    }
);

const StoresSlice = createSlice({
    initialState: [],
    name: "StoresSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStores.fulfilled, (state, action) => {
        return action.payload;
        })
    }
})

export const {} = StoresSlice.actions;
export default StoresSlice.reducer;
