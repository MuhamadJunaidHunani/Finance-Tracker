import React from 'react';
import heroImage from "../../assets/images/heroImage.png";
import CustomButton from '../UI/CustomButton';

const Hero = () => {
  return (
    <div className="bg-[#2E76BE] w-full h-[calc(100vh_-_72px)] max-h-[1000px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-[70px] md:text-[70px] font-bold custom-text-border leading-[80px] text-[white]">
          Welcome to <br/>Our Platform
        </h1>
        <p className="text-sm md:text-lg text-[#e4e4e4]">
          Manage your finances with ease and efficiency.
        </p>
        <div className="space-x-4 flex">
        <CustomButton text={'STARTED'}/>
          <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full circle-gradient h-full flex justify-center items-center md:w-1/2">
        <img
          src={heroImage}
          alt="Hero"
          className="w-[400px] h-auto object-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
