import React from 'react'
import { IoIosUnlock } from 'react-icons/io'
import { MdStart } from 'react-icons/md'

const CustomButton = ({ text , className }) => {
  return (
    <div className={`relative cursor-pointer origin-right ${className}`}>
    <div className="relative z-10 h-[37.5px] gap-1.5 flex items-center bg-secondaryC rounded-[22.5px] transform active:translate-y-[2.25px] active:translate-x-[2.25px]">
      <div className="flex items-center justify-center border-[3px] border-[#afbff3] w-[60px] h-full bg-primaryC rounded-[22.5px] text-backgroundC">
        {/* <IoIosUnlock className="text-[22.5px]" /> */}
        <MdStart className="text-[22.5px]" />
      </div>
      <span className="text-[#495eb3] text-sm font-bold pr-[15px] select-none">{text}</span>
    </div>
    <div className="absolute inset-0 rounded-[22.5px] bg-[#afbff3] transform translate-y-[3px] translate-x-[3px]"></div>
  </div>
  
  )
}

export default CustomButton