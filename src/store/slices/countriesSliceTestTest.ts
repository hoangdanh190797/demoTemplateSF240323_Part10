import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Countries } from '../../types/countries'
// import { RootState } from '../store';

export interface CountriesSlice {
  countries: Countries[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CountriesSlice = {
  countries: [],
  status: 'idle',
  error: null,
};
// export const fetchCountries = createAction<void>('countries/fetchCountriesAsync');

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get<Countries[]>('https://restcountries.com/v3.1/name/afghanistan');
  return response.data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      });
  },
});

//Kha du thua`
// export const selectCountries = (state: RootState) => state.countries.countries;

export default countriesSlice.reducer;