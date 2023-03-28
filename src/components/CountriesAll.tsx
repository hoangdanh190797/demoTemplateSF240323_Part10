import React from 'react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { countriesMethod } from '../store/slices/countriesAllSlice'
import { Countries } from '../types/countries';

export default function CountriesAll() {
    const dispatch = useAppDispatch();
    const countriesAll = useAppSelector((state) => state.countriesAll.countriesAll);
    useEffect(() => {
        dispatch(countriesMethod.fecthcountriesAll);
    },[])
  return (
    <div>
        {countriesAll && countriesAll.map((item:Countries) => (
            <div key={item.cca2}>
                <h6 className='z-10 text-whiteDMT&LME'>
                {item.name.common}
                </h6>
            </div>
        ))}
    </div>
  )
}
