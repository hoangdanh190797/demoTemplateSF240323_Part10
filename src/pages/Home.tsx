import React from 'react'
import Header from '../components/Header'
import CountriesAll from '../components/CountriesAll';
import CountriesComponent from '../components/Countries';
import FilterRegion from '../components/FilterRegion';

export default function Home() {
    return (
        <div>
            <div className='bg-vdblueDMB h-[] z-0'>
                <Header></Header>
                <FilterRegion></FilterRegion>
                <CountriesComponent></CountriesComponent>
                <CountriesAll></CountriesAll>
            </div>
        </div>
    )
}
