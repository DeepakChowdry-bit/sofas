import React from 'react'
import { FaXTwitter,FaInstagram,FaFacebookSquare,FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full bg-zinc-900 h-full lg:h-72 flex items-center justify-center text-white py-10'>
        <div className='w-85 bg-zinc-900 flex flex-col lg:flex-row items-center justify-between h-full gap-14'>
            <div className='flex flex-col h-5/6 justify-around  gap-10 w-full'>
                <div className='flex flex-col lg:flex-row md:flex-row items-start lg:items-center justify-between gap-10'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='uppercase font-semibold tracking-wide'>Navigate</h3>
                        <div className='text-zinc-300 text-sm flex flex-col gap-2'>
                            <p>About</p>
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='uppercase font-semibold tracking-wide'>Categories</h3>
                        <div className='text-zinc-300 text-sm flex flex-col gap-2'>
                            <p>New Arrivals</p>
                            <p>Featured</p>
                            <p>Sale</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='uppercase font-semibold tracking-wide'>Collection</h3>
                        <div className='text-zinc-300 text-sm flex flex-col gap-2'>
                            <p>Bagpacks</p>
                            <p>Wallets</p>
                            <p>Watches</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-xs text-zinc-400 tracking-wider'>Copyright @2024 DailyObjects | All rights reserved</p>
                </div>
            </div>
            <div className='flex flex-col h-5/6 justify-around items-start lg:items-end  w-full gap-8'>
                <div className='flex flex-col items-start lg:items-end w-full  gap-4'>
                    <div className='flex justify-start'>
                        <h3 className='text-base text-left font-semibold tracking-wider'>123 Wall Street Acmeville AC 12345</h3>
                    </div>
                    <div className='flex flex-col items-start lg:items-end tracking-wider text-zinc-300 text-sm gap-2'>
                        <p>enquire@dailyobjects.com</p>
                        <p>+1-512-758-7588</p>
                    </div>
                </div>
                <div className='flex items-center justify-start lg:justify-end w-full  gap-4'>
                    <p className='text-xs tracking-wider'>Get Social</p>
                    <div className='flex items-center gap-3 text-xs'>
                        <FaXTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer