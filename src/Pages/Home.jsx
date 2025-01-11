import React from 'react'
import Hero from '../Components/Sections/Hero'
import Loader from '../Components/UI/Loader'
import Header from '../Components/Layouts/Header'

const Home = () => {
  return (
    <div  className="homeBg">
      <Header/>
      <Hero/>
      {/* <Loader/> */}
    </div>
  )
}

export default Home