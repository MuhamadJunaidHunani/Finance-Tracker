import Lottie from 'lottie-react'
import React from 'react'
import loaderAnimation from "../../assets/JsonIcon/wired-lineal-298-coins-hover-jump.json";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-[#fff1c6]">
      <div className="text-3xl font-bold text-yellow-400 mb-6 uppercase tracking-wider">Coin Craft</div>
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        style={{ width: 60, height: 60 }}
      />
      <div className="w-72 h-1 bg-yellow-400 overflow-hidden relative">
        <div className="w-[100%] h-full bg-red-400 moving-line"></div>
      </div>
    </div>

  )
}

export default Loader