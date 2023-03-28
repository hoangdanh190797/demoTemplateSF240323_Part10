import * as React from 'react';
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { countriesMethod } from '../store/slices/countriesAllSlice'
import { Countries } from '../types/countries';
import CountriesComponent from './CountriesComponent';

export default function CountriesTest (props : any) {
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

  console.log(country);
  console.log(statusHome);
  console.log(countryArray);

  let arrayNotUndefine = countryArray.filter((items: any) => items !== undefined)
  console.log(arrayNotUndefine);

  const clearCountry = () => {
    if(arrayNotUndefine.length >= 2){
      arrayNotUndefine = arrayNotUndefine.slice(-1)
    }
  }
  clearCountry();
  
  // if(arrayNotUndefine.length > 0)
  // {
  //   setContentRender(arrayNotUndefine);
  // }

  

  return (
    <div>
      {/* {countriesAll && countriesAll.map((item: any) => (
        <div className='w-10/12 m-auto bg-dblueDME h-80 my-6'>

          <div>
            <img src={item.flags.svg} alt="" />
          </div>

          <div>
            <h1 className='text-left text-whiteDMT&LME'>
              {item.name.common}
            </h1>
            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Population: </span> <span className='text-dgrayLMI'>{item.population}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Region: </span> <span className='text-dgrayLMI'>{item.region}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Capital: </span> <span className='text-dgrayLMI'>{item.capital}</span>
            </h1>

          </div>
        </div>
      ))} */}

        {arrayNotUndefine.length > 0 ? arrayNotUndefine.map((item: any) => 
        {return <CountriesComponent items={props.item}/>}
      ) : filterRegion.length > 0 ? filterRegion.map((item: any) => (
        <div className='w-10/12 m-auto bg-dblueDME h-80 my-6'>

          <div>
            <img src={item.flags.svg} alt="" />
          </div>

          <div>
            <h1 className='text-left text-whiteDMT&LME'>
              {item.name.common}
            </h1>
            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Population: </span> <span className='text-dgrayLMI'>{item.population}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Region: </span> <span className='text-dgrayLMI'>{item.region}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Capital: </span> <span className='text-dgrayLMI'>{item.capital}</span>
            </h1>

          </div>
        </div>
      )) : countriesAll.map((item: any) => (
        <div className='w-10/12 m-auto bg-dblueDME h-80 my-6'>

          <div>
            <img src={item.flags.svg} alt="" />
          </div>

          <div>
            <h1 className='text-left text-whiteDMT&LME'>
              {item.name.common}
            </h1>
            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Population: </span> <span className='text-dgrayLMI'>{item.population}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Region: </span> <span className='text-dgrayLMI'>{item.region}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Capital: </span> <span className='text-dgrayLMI'>{item.capital}</span>
            </h1>

          </div>
        </div>
      ))} 

        


        {/* {arrayNotUndefine.length > 0 ? arrayNotUndefine.map((item: any) => (
        <div className='w-10/12 m-auto bg-dblueDME h-80 my-6'>

          <div>
            <img src={item.flags.svg} alt="" />
          </div>

          <div>
            <h1 className='text-left text-whiteDMT&LME'>
              {item.name.common}
            </h1>
            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Population: </span> <span className='text-dgrayLMI'>{item.population}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Region: </span> <span className='text-dgrayLMI'>{item.region}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Capital: </span> <span className='text-dgrayLMI'>{item.capital}</span>
            </h1>

          </div>
        </div>
      )) : countriesAll.map((item: any) => (
        <div className='w-10/12 m-auto bg-dblueDME h-80 my-6'>

          <div>
            <img src={item.flags.svg} alt="" />
          </div>

          <div>
            <h1 className='text-left text-whiteDMT&LME'>
              {item.name.common}
            </h1>
            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Population: </span> <span className='text-dgrayLMI'>{item.population}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Region: </span> <span className='text-dgrayLMI'>{item.region}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Capital: </span> <span className='text-dgrayLMI'>{item.capital}</span>
            </h1>

          </div>
        </div>
      ))} */}

    </div>
  )
}
