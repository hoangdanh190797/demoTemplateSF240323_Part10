import { createSlice, createAsyncThunk, PayloadAction, createAction } from "@reduxjs/toolkit";
import countriesAllAPI from "../../services/countriesAllAPI";
import { Countries } from "../../types/countries";

export declare interface CountriesAllSlice{
    countriesAll: Countries[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
    statusRegion: string
    filterRegion: any
    country: any
    countryArray: any
    statusHome: 'Normal' | 'statusSearch' | 'statusFilterRegion'
}

const initialState: CountriesAllSlice = {
    countriesAll: [],
    status: 'idle',
    error: null,
    statusRegion: '',
    filterRegion: [],
    country: {},
    countryArray: [],
    statusHome: 'Normal'
}

export const countriesMethod = {
    fecthcountriesAll: createAsyncThunk('countriesAll/fecthcountriesAll',async () => {
            try {
                const response = await countriesAllAPI.getCountriesAll();
                return response.data
            } catch (error) {
                throw error
            }
        }),
    getRegion: createAction<any, 'getRegion'>('getRegion'),
    getClearCountry: () => {}
}

// export const fecthcountriesAll = createAsyncThunk('countriesAll/fecthcountriesAll',async () => {
//     try {
//         const response = await countriesAllAPI.getCountriesAll();
//         return response.data
//     } catch (error) {
//         throw error
//     }
// })

const countriesAllSlice = createSlice({
    name: 'countriesAll',
    initialState,
    reducers: {
        getStatusRegion:(state, aciton: PayloadAction<string>)=>{
            state.statusRegion = aciton.payload
        },
        getCountry:(state, action: PayloadAction<string>)=>{
            state.country = state.countriesAll.find((item) => item.name.common === action.payload)
            state.countryArray.push(state.country)
        }
        // getRegion:()=>{},

        // => {
        //     for(let items of state.countriesAll){
        //         if(items.region === action.payload){
        //             state.filterRegion.push(items)
        //         }
        //     }
        // }

        // filterRegion:(state, action: PayloadAction<Region>) => {
        //     let newRegion = action.payload;
        //     let newListCountries = state.countriesAll.map((item) => item.region === newRegion);
        //     return{...state, countriesAll:newListCountries}
        // }

        /*
            
         */

        // filterRegion:{
        //     reducer(
        //         state,
        //         action: PayloadAction<Region>,
        //     ){
        //         let newRegion = action.payload;
        //         let newListCountries = state.countriesAll.map((item) => item.region === newRegion);
        //     },
        //     prepare(payload: Region){
        //         return{...state, countriesAll:newListCountries}
        //     },
        // }
    },
    extraReducers(builder) {
        builder
        .addCase(countriesMethod.fecthcountriesAll.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(countriesMethod.fecthcountriesAll.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.countriesAll = action.payload;
        })
        .addCase(countriesMethod.fecthcountriesAll.rejected, (state, aciton) => {
            state.status = 'failed';
            state.error = aciton.error.message ?? null
        })
        .addCase(countriesMethod.getRegion, (state, action: PayloadAction<string>) => {
            state.filterRegion = action.payload;
        })
    },
})

export const { getStatusRegion, getCountry } = countriesAllSlice.actions;
export default countriesAllSlice.reducer