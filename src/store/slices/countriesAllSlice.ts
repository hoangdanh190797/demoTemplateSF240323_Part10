import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import countriesAllAPI from "../../services/countriesAllAPI";
import { Countries } from "../../types/countries";

export declare interface CountriesAllSlice{
    countriesAll: Countries[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
}

const initialState: CountriesAllSlice = {
    countriesAll: [],
    status: 'idle',
    error: null
}

export const fecthcountriesAll = createAsyncThunk('countriesAll/fecthcountriesAll',async () => {
    try {
        const response = await countriesAllAPI.getCountriesAll();
        return response.data
    } catch (error) {
        throw error
    }
})

const countriesAllSlice = createSlice({
    name: 'countriesAll',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fecthcountriesAll.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fecthcountriesAll.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.countriesAll = action.payload;
        })
        .addCase(fecthcountriesAll.rejected, (state, aciton) => {
            state.status = 'failed';
            state.error = aciton.error.message ?? null
        })
    },
})

export default countriesAllSlice.reducer