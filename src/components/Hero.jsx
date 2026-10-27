
import Slider from "react-slick"
import { ImageList } from "../data/data"


export default function Hero({handleOrderPopup}) {

    const settings = {
        dots : false ,
        arrow : false,
        infinite :true,
        speed : 800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed: 4000,
        cssEase:"ease-in-out",
        pauseOnHover : false,
        pauseOnFocus: true,
        fade: false,
        adaptiveHeight: true,
        useCSS: true,
        useTransform: true,
    }

  return (
    <>
        <div id="home" className="relative overflow-hidden  min-h-[550px] bg-gray-200 sm:min-h-[650px] flex justify-center items-center duration-200  " >
        {/* background pattren */}
            <div className="h-[700px] w-[700px] absolute -top-1/2  right-0  bg-orange-300 rounded-3xl rotate-45 z-10  "></div>
            {/* hero section */}
            <div className="m-10 lg:m-15    pb-8 sm:pb-0 w-full relative z-30 mx-auto ">
            <div className="slider-container">
            <Slider {...settings}>
              {ImageList.map((e, index) => (
                <div key={index} className="slide-item">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="ps-12 flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                      <h1
                       data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                       className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                        {e.title}
                      </h1>
                      <p
                       data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="100"
                       className="text-lg">{e.description}</p>
                      <div
                       data-aos="fade-up"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      >
                        <button onClick={()=> handleOrderPopup()} className="bg-gradient-to-r from-orange-300 to-orange-400 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer">
                          Order Now
                        </button>
                      </div>
                    </div>
                    {/* image section */}
                    <div className="order-1 sm:order-2">
                      <div
                       data-aos="zoom-in"
                       data-aos-once="true"
                       className="relative z-10 flex justify-end items-end">
                        <img
                          src={e.img}
                          alt="not found"
                          className="w-[300px] h-[350px] sm:w-[450px] sm:h-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                        />
                        {/* <div className="rounded-full bg-orange-300 p-8 w-fit h-fit text-5xl sm:text-6xl lg:text-7xl font-bold flex justify-center items-center ">Upto 30% off</div> */}
                      </div>
                    </div>
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