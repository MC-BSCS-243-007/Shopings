import React from 'react'

const Notifications = () => {
  return (
    <>
        <div data-aos="fade-up" className=' bg-gradient-to-l from-orange-300 to-orange-500  p-8 mb-8'>
            <div data-aos="fade-up" className='flex flex-col gap-5 justify-center items-center'>
                <h1 className='text-3xl sm:text-4xl font-bold'>Get Notified About New Products</h1>
                <input type='search' placeholder='Enter product name' className='h-[50px] w-[300px] sm:w-[600px] lg:w-[600px] bg-gray-100 p-4 rounded-xl'/>
            </div>
        </div>
    </>
  )
}

export default Notifications
