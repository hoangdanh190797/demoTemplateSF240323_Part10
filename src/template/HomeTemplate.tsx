import React from 'react'
import Header from '../components/Header'
import { Outlet } from "react-router-dom";


export default function HomeTemplate() {
  return (
    <div>
        {/* Header */}
        <Header/>
        {/* Content */}
        <Outlet/>
        {/* Footer */}
    </div>
  )
}
