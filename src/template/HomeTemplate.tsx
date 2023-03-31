import React from 'react'
import Header from '../components/Header'
import { Outlet } from "react-router-dom";
import '../styles/pages/_template_home.scss';


export default function HomeTemplate() {
  return (
    <div id='template_home_'>
        {/* Header */}
        <Header/>
        {/* Content */}
        <Outlet/>
        {/* Footer */}
    </div>
  )
}
