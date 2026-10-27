import React from 'react'
import { FaStar } from "react-icons/fa"
import { TopProductsData } from '../data/data'

const TopProducts = ({handleOrderPopup}) => {
  return (
    <>
      <div>
        <div id='Trated' className='container mx-auto mb-10 bg-gray-100 pb-5 '>
        {/* header section */}
          <div className=' max-w-[500px] p-8 mb-10 text-start'>
            <p data-aos="fade-up" className='text-orange-400 mb-2 text-lg font-semibold '>Trending Products</p>
            <h3 data-aos="fade-up" className='text-4xl mb-4 font-bold '>Top Rated Products</h3>
            <p data-aos="fade-up" className='text-gray-500'>These products are  the best quality products and these products are the heighly rated. </p>
          </div>
          {/* Body section */}
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7 gap-15 '>
             {TopProductsData.map((data)=>(
              <div  data-aos="fade-up"
                data-aos-delay={data.aosDelay} key={data.id} className='flex flex-col justify-center items-center p-5 gap-2  rounded-2xl hover:bg-gradient-to-b from-orange-400 to-orange-300 drop-shadow-[-5px_5px_6px_rgba(0,0,0,1)]  bg-gray-200 hover:scale-105 cursor-pointer'>
                <img src={data.img} alt='not found' className='h-[250px] w-[200px] bg-white p-4'/>
                <div className='flex p-2 '>
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                
                <h3 className='text-2xl font-bold text-orange-900'>{data.title} </h3>
                <p className='text-orange-900'>{data.description} </p>
                <button onClick={()=> handleOrderPopup()} className="bg-gradient-to-r from-orange-400 to-orange-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-xl cursor-pointer ">{data.btn} </button>
              </div>
             ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopProducts
