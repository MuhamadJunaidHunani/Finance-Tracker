import React from 'react'
import Hero from '../Components/Sections/Hero'
import Header from '../Components/Layouts/Header'
import ConverterIntro from '../Components/Sections/converterIntro'
import OurClients from '../Components/Sections/OurClients'


const Home = () => {
  return (
    <div className="homeBg">
      <Header />
      <Hero />
      <OurClients/>
      <ConverterIntro/>
    </div>
  )
}

export default Home