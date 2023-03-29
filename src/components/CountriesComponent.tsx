import React from 'react'
import { Link } from 'react-router-dom'

export default function CountriesComponent(props:any) {
  const {flags, name, population, region, capital} = props
  return (
    <div className='w-10/12 m-auto bg-dblueDME h-80 my-6'>

          <div>
            <Link to={`/detail/${name.common}`}>
              <img src={flags?.svg} alt="" />
            </Link>
          </div>

          <div>
            <h1 className='text-left text-whiteDMT&LME'>
              {name.common}
            </h1>
            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Population: </span> <span className='text-dgrayLMI'>{population}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Region: </span> <span className='text-dgrayLMI'>{region}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Capital: </span> <span className='text-dgrayLMI'>{capital}</span>
            </h1>

          </div>
        </div>
  )
}
