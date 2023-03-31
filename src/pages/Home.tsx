import React from 'react'

import FilterRegion from '../components/FilterRegion';
import SearchInput from '../components/SearchInput';
import Countries from '../components/Countries'
import '../styles/pages/_home.scss';

export default function Home() {
    return (
        <div id='home_'>
            <div className='home_content'>
                <div className='home_content_flex'>
                    <SearchInput></SearchInput>
                    <FilterRegion></FilterRegion>
                </div>
                <div className='home_content_countries'>
                    <Countries></Countries>
                </div>
            </div>
        </div>
    )
}
