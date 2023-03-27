import * as React from 'react';
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fecthcountriesAll } from '../store/slices/countriesAllSlice'
import { Countries } from '../types/countries';

export default function CountriesComponent() {
  const dispatch = useAppDispatch();
  const countriesAll = useAppSelector((state) => state.countriesAll.countriesAll);
  useEffect(() => {
    dispatch(fecthcountriesAll());
  }, [])
  //
  const newArr = countriesAll.slice(0, 6);

  return (
    <div>
      {newArr && newArr.map((item: Countries) => (
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
    </div>
  )
}
