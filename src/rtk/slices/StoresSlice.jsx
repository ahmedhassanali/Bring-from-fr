import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchStores = createAsyncThunk(
    "StoresSlice/fetchStores",
    async () => {
        const res = await fetch("http://127.0.0.1:8000/api/stores");
        const data = await res.json();
        return data.data;
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

// export const {} = StoresSlice.actions;
export default StoresSlice.reducer;
