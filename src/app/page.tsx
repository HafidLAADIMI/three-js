import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

const page = () => {
  return (
    <main className='max-w-7xl mx-auto relative'>
         <Navbar/>
         <Hero/>
         <About/>
         <Work/>
         <Clients/>
         <Experience/>
         <Contact/>
         <Footer/>
    </main>
  )
}

export default page
