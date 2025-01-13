import React from 'react'
import Hero from '../Components/Sections/Hero'
import Header from '../Components/Layouts/Header'
import { useToast } from '../Hooks/ToastHook'

const Home = () => {
  const { showToast } = useToast();
  return (
    <div className="homeBg">
      <button onClick={() => showToast("Success!", "success")}>
        Show Success
      </button>
      <button onClick={() => showToast("Error!", "error")}>Show Error</button>
      <Header />
      <Hero />
      {/* <Loader/> */}
    </div>
  )
}

export default Home