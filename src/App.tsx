import React from 'react';
import './App.css';
// import logo from './logo.svg';
// import Test from './components/Test';
// import TestTest from './components/TestTest';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import HomeTemplate from './template/HomeTemplate';
import CountriesDetail from './components/CountriesDetail';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeTemplate />}>
        <Route index element={<Home />} />
        <Route path='detail/:countryName' element={<CountriesDetail/>}/>
      </Route>
    </Routes>
  );
}

export default App;
