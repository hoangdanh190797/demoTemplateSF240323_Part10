import React from 'react'
import Header from '../components/Header'
import CountriesAll from '../components/CountriesAll';
// import CountriesComponent from '../components/Countries';
import FilterRegion from '../components/FilterRegion';
import SearchInput from '../components/SearchInput';
import CountriesTest from '../components/Countries';

export default function Home() {
    return (
        <div>
            <div className='bg-vdblueDMB h-[] z-0'>
                <Header></Header>
                <SearchInput></SearchInput>
                <FilterRegion></FilterRegion>
                {/* <CountriesComponent></CountriesComponent> */}
                <CountriesTest></CountriesTest>
                <CountriesAll></CountriesAll>
            </div>
        </div>
    )
}
