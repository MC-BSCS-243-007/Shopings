import React from 'react'
import  Bimg  from "../assets/products/Laptop.png";
import { GrSecure } from "react-icons/gr"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"


const Banners = () => {
  return (
    <>
      <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0 pb-4 '>
        <div className='container'>
            <div data-aos= "fade-up" className=' grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                {/* image section */}
                <div>
                    <img src={Bimg} alt='not found' className= 'h-[400px] max-w-[400px] bg-gradient-to-tl from-orange-400 to-orange-700 w-full rounded-xl mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover   ' />
                </div>
                {/* text detail section */}
                <div data-aos="fade-up" className='flex  justify-center flex-col p-10 gap-6 sm:pt-0'>
                    <h2 className='text-3xl sm:text-4xl font-bold '>Winter Sale upto 50% off</h2>
                    <p className='text-gray-600 text-sm  tracking-wide leading-5'>lorem alskd lasdk alsdk lasdk asdk adk sdak awdkam dka lwd aldk ;qlwdk lwdk qwld qj qwwdj pqjod qjd q;dk lqdj q;wj qwldj dlawjd qwlwej ljd qlwjwe ;lqjweo qwej qlj asdjhalsd JKD SLKDJ LSKADJ aksdf lasdj askldj laskdj lasdj askjd  </p>
                    <div className='flex flex-col gap-4'>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100"/>
                            <p>Quality Products</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100"/>
                            <p>Fast Delivery</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100"/>
                            <p>Easy Payment Method</p>
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4'>
                            <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100"/>
                            <p>Get Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Banners
