import React from 'react'
import Hero from '../Components/Sections/Hero'
import Header from '../Components/Layouts/Header'
import ConverterIntro from '../Components/Sections/converterIntro'


const Home = () => {
  return (
    <div className="homeBg">
      <Header />
      <Hero />
      <ConverterIntro/>
    </div>
  )
}

export default Home