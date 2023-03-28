import React from 'react'

export default function CountriesComponent(items:any) {
  return (
    <div className='w-10/12 m-auto bg-dblueDME h-80 my-6'>

          <div>
            <img src={items.flags.svg} alt="" />
          </div>

          <div>
            <h1 className='text-left text-whiteDMT&LME'>
              {items.name.common}
            </h1>
            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Population: </span> <span className='text-dgrayLMI'>{items.population}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Region: </span> <span className='text-dgrayLMI'>{items.region}</span>
            </h1>

            <h1 className='text-left text-whiteDMT&LME'>
              <span className='text-whiteDMT&LME'>Capital: </span> <span className='text-dgrayLMI'>{items.capital}</span>
            </h1>

          </div>
        </div>
  )
}
