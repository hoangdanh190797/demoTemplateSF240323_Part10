import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/_country.scss'

export default function CountriesComponent(props: any) {
  const { flags, name, population, region, capital } = props
  return (
    <div id='country_'>
      {/* className='w-10/12 m-auto bg-dblueDME h-80 my-6' */}
      <div className='country_content'>
        <div>
          <Link to={`/detail/${name.common}`}>
            <img src={flags.svg} alt="" />
          </Link>
        </div>

        <div className='country_info'>
          <h1 className='country_name'>
            {name.common}
          </h1>
          <h1>
            <span className='spanOne'>Population: </span><span className='spanTwo'>{population}</span>
          </h1>
          <h1>
            <span className='spanOne'>Region: </span><span className='spanTwo'>{region}</span>
          </h1>
          <h1>
            <span className='spanOne'>Capital: </span><span className='spanTwo'>{capital}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
