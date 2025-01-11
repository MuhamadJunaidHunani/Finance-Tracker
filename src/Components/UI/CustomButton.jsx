import React from 'react'
import { IoIosUnlock } from 'react-icons/io'
import { MdStart } from 'react-icons/md'

const CustomButton = ({text}) => {
  return (
    <div className="relative scale-75 cursor-pointer">
    <div className="relative h-[50px] gap-2 flex items-center bg-secondaryC rounded-[30px] transform active:translate-y-[3px] active:translate-x-[3px]">
        <div className="flex items-center justify-center border-[4px] border-[#afbff3] w-[80px] h-full bg-primaryC rounded-[30px] text-backgroundC">
            {/* <IoIosUnlock className="text-[30px]" /> */}
            <MdStart className="text-[30px]" />
        </div>
        <span className="text-[495eb3] text-lg font-bold pr-[20px] select-none">{text}</span>
    </div>
    <div className="absolute inset-0 rounded-[30px] bg-[#afbff3] z-[-100] transform translate-y-[4px] translate-x-[4px]"></div>
</div>
  )
}

export default CustomButton