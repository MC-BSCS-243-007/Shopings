import React from 'react'
import logo from "../assets/navbar/vecteezy_shopping-bag-logo-icon-design-template-vector_7635577.jpg"
import { FooterLinks } from '../data/data'
import { FaInstagram,FaFacebook,FaLinkedin,FaLocationArrow,FaMobileAlt,} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <div className='p-4  bg-gradient-to-r from-black to-orange-950 text-white   pb-20'>
        <div className='container'
        data-aos='zoom-in'>
            <div className='grid md:grid-cols-3 pb-44 pt-5 '>
                {/* company detail */}
                <div className='py-8 space-y-4 px-4  '>
                    <h1 className='flex items-center gap-2 sm:text-3xl sm:text-left text-justify text-xl font-bold'>
                    <img src={logo} alt='not found' className='h-10 w-10' />
                    Shopsy</h1>
                    <p className='text-sm text-gray-400'>asd saadf asfaf asfaf asfafac csdc dsfwe asdwe wdcwe wdefw asdwed sd w fwrqe qed qedw qdwcr ascwrcrf dcwrcfrf dscrcqe qsdwedwrc wdcc wdcefvr </p>
                </div>
                {/* Footer links */}
                <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                    <div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Main Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map((link)=>(
                                    <li className='cursor-pointer hover:text-orange-300 hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* social links */}
                    <div>
                        <div className='flex item-center gap-3 mt-6'>
                            <a href='#'>
                                <FaInstagram className='text-3xl'/>
                            </a>
                            <a href='#'>
                                <FaFacebook className='text-3xl'/>
                            </a>
                            <a href='#'>
                                <FaLinkedin className='text-3xl'/>
                            </a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow/>
                                <p>Khan,Multan</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt/>
                                <p>+921234567892</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
