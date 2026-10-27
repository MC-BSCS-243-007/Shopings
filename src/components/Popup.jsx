import React from 'react'
import { IoCloseOutline} from 'react-icons/io5'

const Popup = ({orderPopup,setOrderPopup}) => {
  return ( 
  <>
  {orderPopup && (
    <div className='popup'>
    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm '>
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]'>
            {/* header */}
            <div className='flex justify-between items-center mb-5 font-semibold'>
                <div>
                    <h1>Order Now</h1>
                </div>
            <div>
            <IoCloseOutline className='text-2xl font-semibold cursor-pointer' onClick={()=>setOrderPopup(false)}/>
            </div>
            </div>
            {/* form section */}
            <div>
                <input type='text' placeholder='Name' className='w-full rounded-full border border-gray-300 px-2 py-1 mb-4'/>
                <input type='email' placeholder='Email' className='w-full rounded-full border border-gray-300 px-2 py-1 mb-4'/>
                <input type='text' placeholder='Address' className='w-full rounded-full border border-gray-300 px-2 py-1 mb-4'/>
                <div className='flex justify-center'>
                    <button className="bg-gradient-to-r from-orange-300 to-orange-400 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer">
                      Order Now
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
  )}
  </>

  )
}

export default Popup
