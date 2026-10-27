import { navbar} from "../data/data.js"
import {downdroplinks } from "../data/data.js"
import {FaCaretDown} from "react-icons/fa"
import Shopinglogo from "../assets/navbar/vecteezy_shopping-bag-logo-icon-design-template-vector_7635577.jpg"
import searchlogo from "../assets/navbar/icons8-search.svg"
import cartlogo from "../assets/navbar/icons8-cart-16.png"


function Navbar({handleOrderPopup} ) {

  return (
    <>
      <div className="bg-orange-300 border-b-1 border-white sm:border-0   ">
        {/* upper navebar */}
      <nav className="  p-2">
        <div className="flex space-x-8 justify-between items-center">
          <div className="flex p-2 ml-3 gap-2 w-[200px] justify-center  items-center">
            <img src={Shopinglogo} className="w-12  " />
            <h1 className="font-bold text-2xl"> Shopings </h1>
          </div>
          <div className="flex  gap-2 sm:gap-18">
          {/* search bar */}
          <div className="flex items-center justify-end">
          <img className="absolute p-2  cursor-pointer   " src={searchlogo} />
            <input type="text" placeholder="Search" className="p-1 pl-3  bg-gray-300 w-[150px]   flex justify-center items-end rounded-full hover:w-[200px] sm:w-[250px] sm:hover:w-[300px]   duration-150 transition-all  focus:outline-none focus:border-1 "/>
            
          </div>
          <div onClick={()=> handleOrderPopup()} className="flex gap-1  cursor-pointer
           rounded-full p-1 pl-3 pr-3  hover:scale-105 duration-150 group  bg-orange-500">
          <span className=" group-hover:block hidden transition-all duration-200 text-orange-950 font-semibold ">Order</span>
          <img className=" p-0.5" src={cartlogo} />
          </div>
          </div>
          <div>

          </div>
          </div>
         </nav>



         {/* lower navbar */}
         <nav className=" bg-orange-200 p-3 hidden sm:flex justify-center ">
         <div className="flex justify-center items-center  space-x-5 lg:space-x-16 font-semibold text-lg ">
          {navbar.map((i) => (
          <a className="space-x-6 font-semibold text-lg hover:text-orange-900 " key={i.name} href={i.href} >
          <div  className="">
            <p>{i.name}</p>
            </div>
          </a>
          ))}
          <div className=" group relative cursor-pointer">
          <a href="#" className="flex items-center hover:text-orange-900  gap-[2px] py-2">
            Trending Products
            <span>
              <FaCaretDown
                className="transition-all duration-200 group-hover:rotate-180 "
              />
            </span>
          </a>
          <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-orange-200 text-black p-2 ">
          {downdroplinks.map((e)=>(
            <a key={e.id} href={e.href}
            className="inline-block w-full rounded-md p-2  hover:bg-orange-100 hover:text-orange-950 shadow-md " >
              {e.name}
            </a>
            ))}
          </div>
          </div>
        </div>
    </nav>

      </div>
    </>
  )
}

export default Navbar