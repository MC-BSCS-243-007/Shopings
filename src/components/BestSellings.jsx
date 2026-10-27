
import { ProductsData } from "../data/data";
import { FaStar } from "react-icons/fa"



function BestSellings() {
    return(
        <>
            <div id="Bselling" className=" mt-8 p-5 mb-12 ">
            <div className="continer ">
            {/* header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto ">
            <p data-aos="fade-up" className="text-lg mb-2 text-orange-400 font-semibold">Top selling products for you</p>
            <h1 data-aos="fade-up" className="text-4xl font-bold mb-4">Best Selling Products </h1>
            <p data-aos="fade-up" className="text-md text-gray-500"> These are the best quility and Best Selling products in our shop </p>
            </div>
            {/* body section */}
            <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center
            gap-5 ">
            {/* card section  */}
             {ProductsData.map( (data) => (
                <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                 key={data.id} className="space-y-3 bg-white rounded-2xl p-2 hover:bg-orange-300 drop-shadow-[-5px_5px_6px_rgba(0,0,0,1)]   hover:cursor-pointer hover:scale-105 duration-150 ">
                    <img src={data.img} alt="not found" className="h-[200px] w-[150px] bg-gray-200  object-cover rounded-md" />
                    <div>
                    <h3 className=" font-semibold">{data.title} </h3>
                    <p className="text-sm text-grey-600">{data.author}</p>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-300"></FaStar>
                        <span>{data.rating}</span>
                        
                        
                        </div>
                    </div>
                </div>
             ))}
               </div>
              </div>
              {/* footer section */}
              <div className="flex justify-center p-6">
                <button data-aos="fade-up" className="bg-gradient-to-r from-orange-300 to-orange-400 hover:scale-105 duration-200 text-white py-2 px-4 rounded-xl mt-5 cursor-pointer ">View All Products</button>
              </div>
             </div>
            </div>
        </>
    )
} 

export default BestSellings