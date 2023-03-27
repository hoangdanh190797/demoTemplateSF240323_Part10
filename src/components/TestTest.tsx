import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { RootState } from "../store/store";
import { useAppDispatch, useAppSelector  } from '../hooks/hooks';
import {  fetchCountries } from '../store/slices/countriesSliceTestTest'

export default function TestTest() {
  const dispatch = useAppDispatch();

  // const country = useSelector((state: RootState) => state.countries.countries)
  //***Lay du lieu tu state xuong theo cach tren la lay truc tiep tu store ra

  const country = useAppSelector((state) => state.countries.countries)
  //***Lay du lieu thong qua Custom Component (tren ReduxToolkit co huong dan)
  const status = useAppSelector((state) => state.countries.status)
  const error = useAppSelector((state) => state.countries.error)

useEffect(() => {
  if (status === 'idle') {
    dispatch(fetchCountries())
  }
}, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p>Data:</p>
      <pre>{JSON.stringify(country, null, 2)}</pre>
      <ul>
      {country.map((country: any) => (
        <li key={country.cca2}>{country.cca2}</li>
      ))}
    </ul>
    </div>
  )
}
