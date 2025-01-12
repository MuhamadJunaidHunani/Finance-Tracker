import React from 'react';
import heroImage from "../../assets/images/heroImage.png";
import CustomButton from '../UI/CustomButton';
import { CustomToast } from '../UI/CustomToast';

const Hero = () => {
  return (
    <div className="bg-[transparent] w-full h-[calc(100vh_-_72px)] max-h-[1000px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-[70px] md:text-[40px] font-bold custom-text-border leading-[60px] text-primaryC">
          Track & Manage <br /><span className='text-[70px]'>Your Wealth</span>
        </h1>
        <p className="text-sm md:text-lg text-textC">
          Seamlessly manage and grow your finances with powerful tools and insights.
        </p>
        <div className="space-x-4 flex">
          <CustomButton text={'STARTED'} />
          {/* <CustomToast text={"hello"} type={"success"} /> */}
          <a href="#" className="inline-flex items-center space-x-2 text-primaryC">
            <span>Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-all duration-300 group-hover:scale-x-150" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>

        </div>
      </div>

      <div className="w-full  h-full flex justify-center items-center md:w-1/2">
        <img
          src={heroImage}
          alt="Hero"
          className="w-[450px] h-auto object-cover "
        />
      </div>
    </div>
  );
};

export default Hero;
