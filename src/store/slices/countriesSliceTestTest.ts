import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Countries } from '../../types/countries'

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

export interface CountriesSlice {
  countries: Record<string, Countries>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CountriesSlice = {
  countries: {},
  status: 'idle',
  error: null,
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://api.adviceslip.com/advice');
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
        console.log(action.payload);
        
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export const selectCountries = (state: RootState) => state.countries.countries;
export const selectCountriesStatus = (state: RootState) => state.countries.status;
export const selectCountriesError = (state: RootState) => state.countries.error;

export default countriesSlice.reducer;