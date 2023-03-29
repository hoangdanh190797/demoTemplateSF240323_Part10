import React from 'react'

import FilterRegion from '../components/FilterRegion';
import SearchInput from '../components/SearchInput';
import Countries from '../components/Countries'

export default function Home() {
    return (
        <div>
            <div className='bg-vdblueDMB h-[] z-0'>
                <SearchInput></SearchInput>
                <FilterRegion></FilterRegion>
                <Countries></Countries>
            </div>
        </div>
    )
}
