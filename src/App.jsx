
import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import TopProducts from "./components/TopProducts"
import Banners from "./components/Banners"
import Notifications from "./components/Notifications"
import BestSellings from "./components/BestSellings"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer"

// import Hamburger from "./components/Hamburger"
import AOS from "aos"
import "aos/dist/aos.css"
import Popup from "./components/Popup"



function App() {
  const [orderPopup,setOrderPopup] = React.useState(false);

  const handleOrderPopup = ()=>{
    setOrderPopup(!orderPopup);
  };
  
  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
    <div className="bg-white">
     <Navbar handleOrderPopup={handleOrderPopup}/>
     <Hero handleOrderPopup={handleOrderPopup}/>
     <Products/>
     <TopProducts handleOrderPopup={handleOrderPopup}/> 
     <Banners/>
     <Notifications/>
     <BestSellings/>
     <Testimonials/>
     <Footer/>
     <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
