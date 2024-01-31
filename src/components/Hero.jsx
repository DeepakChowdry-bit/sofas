import React from 'react'
import Image from 'next/image'
import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarBorder } from "react-icons/md";
import { FaXTwitter, FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";

const Hero = () => {
    return (
        <div className='flex justify-center items-center w-full lg:h-100 h-full'>
            <div className='flex flex-col justify-center items-center w-90 h-full lg:h-5/6  shadow-2xl my-6'>
                
                <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-between h-full bg-zinc-200'>
                    <div className='w-full flex flex-col justify-center items-center lg:h-full h-48'>
                        <div className='flex flex-col gap-1 w-11/12 items-center'>
                            <p className='flex items-center gap-1 font-medium uppercase tracking-lg text-xss'>
                                A Modern Look
                            </p>
                            <h3 className='text-2xl lg:text-4xl font-semibold uppercase'>Sofas Minimal</h3>
                            <button className='py-3 px-6 bg-zinc-950 text-white uppercase tracking-widest text-xss mt-5'>Shop Now</button>
                        </div>
                    </div>
                    <Image src='/sofas/sofa (12).jpg' width={500} height={100} alt='' className='h-full w-full object-cover lg:w-auto' />
                </div>
            </div>
        </div>
    )
}

export default Hero