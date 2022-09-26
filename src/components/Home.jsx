import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Navbar from './header/Navbar'
import MainBody from './main/MainBody';

function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <MainBody />
    <Footer />
    </>
  )
}

export default Home