import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Countries } from "../types/countries";
import { CountriesSlice } from '../store/slices/countriesSliceTestTest'
import { current } from "@reduxjs/toolkit";

export default function TestTest() {
    const country = useSelector((state : RootState) => state.countries.countries)
    const statusTest = useSelector((state : RootState) => state.countries.status)
    console.log(typeof country)
    console.log(typeof statusTest)
    console.log(country, statusTest);
    // console.log(current(country));
    
    
  return (
    <div>
        {Object.values(country).map((country: Countries) => (
        <div>
          {/* <h2>{country.name}</h2> */}
          <p>{country.name.common}</p>
        </div>
      ))}
    </div>
  )
}
