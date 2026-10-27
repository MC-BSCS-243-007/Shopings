import React from 'react'
import Slider from 'react-slick'
import { TestimonialData } from '../../data/data'



let Testimonials = () => {
    const settings = {
        dots : true ,
        arrow : false,
        infinite :true,
        speed : 500,
        slidesToScroll:1,
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed: 3000,
        cssEase:"linear",
        pauseOnHover : true,
        pauseOnFocus: true,
        responsive:[
            {
                breakpoint :10000,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll:1,
                    infinite:true,
                    
                },
            },
            {
                breakpoint :1024,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll:1,
                    infinite:true,
                },
            },
            {
                breakpoint :640,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll:1,
                },
            },
        ]
    }
  return (
    <>
      <div className='py-10 mb-10'>
        <div className='container'>
            {/* header section */}
            <div className="text-center mb-10 w-[300px] sm:w-[600px] mx-auto ">
            <p data-aos="fade-up" className="text-lg mb-2 text-orange-400 font-semibold">What our customers are saying</p>
            <h1 data-aos="fade-up" className="text-4xl font-bold mb-4">Testimonials</h1>
            <p data-aos="fade-up" className="text-md text-gray-500"> These are the best quility and top trending products in our shop asd ASSDG SDASSFA asdads sdasd asdasd asdad asdasd asdasd </p>
            </div>
            {/* Testimonial cards */}
            <div data-aos="zoom-in">
                    <Slider {...settings}  >
                        {TestimonialData.map((data)=>(
                            <div className='my-6'>
                            <div key={data.id} className='flex flex-col gap-4 py-8 px-6 mx-4 rounded-lg bg-orange-200 relative'>
                                <div className=' p-2 '>
                                    <img src={data.img} alt='not found' className='rounded-full w-25 h-25 bg-orange-300'/>
                                </div>
                                <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-5'>
                                    <p className='text-sm text-gray-500 '>{data.text}</p>
                                    <h1 className='text-xl font-bold'>{data.name}</h1>
                                </div>
                                </div>
                                <p className='text-black/20 text-9xl absolute top-0 right-0 font-serif'>,,</p>
                            </div>
                            </div>
                        ))}
                    </Slider>
            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
