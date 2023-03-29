import * as React from 'react';
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { countriesMethod } from '../store/slices/countriesAllSlice'
import { Countries } from '../types/countries';
import CountriesComponent from './CountriesComponent';

export default function CountriesTest() {
  const dispatch = useAppDispatch();

  const statusHome = useAppSelector((state) => state.countriesAll.statusHome);
  const countryArray = useAppSelector((state) => state.countriesAll.countryArray);
  const country = useAppSelector((state) => state.countriesAll.country);
  const countriesAll = useAppSelector((state) => state.countriesAll.countriesAll);
  const filterRegion = useAppSelector((state) => state.countriesAll.filterRegion);

  // const [statusPage, setStatusPage] = React.useState('Normal')
  // const [contentRender, setContentRender] = React.useState(countriesAll)

  useEffect(() => {
    dispatch(countriesMethod.fecthcountriesAll());
  }, [dispatch])

  let arrayNotUndefine = countryArray.filter((items: any) => items !== undefined)

  const clearCountry = () => {
    if (arrayNotUndefine.length >= 2) {
      arrayNotUndefine = arrayNotUndefine.slice(-1)
    }
  }
  clearCountry();
  return (
    <div>
      {arrayNotUndefine.length > 0 ? arrayNotUndefine?.map((item: any) => 
      { return <CountriesComponent {...item} /> }
      ) : filterRegion.length > 0 ? filterRegion?.map((item: any) => 
      { return <CountriesComponent {...item} /> }) : countriesAll?.map((item: any) => 
      { return <CountriesComponent {...item} /> })}
    </div>
  )
}
