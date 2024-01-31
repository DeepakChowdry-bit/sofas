import React from 'react'
import Image from 'next/image'
import { FiMinus, FiPlus } from "react-icons/fi";

const page = () => {
    return (
        <div className='lg:h-100 md:h-81 h-full w-full flex justify-center items-center'>
            <div className='w-full h-120 flex flex-col lg:flex-row md:flex-row justify-end items-center'>
                <Image src="/sofas/sofa (10).jpg" width={200} height={100} alt='' className='lg:w-50 md:w-50 w-full h-70 lg:h-full md:h-full lg:relative md:relative fixed -z-10 top-0' />

                <div className='flex flex-col justify-center items-center h-50 w-full gap-1 bg-white rounded-t-3xl'>
                    <p className='text-zinc-500 text-xss uppercase font-semibold'>
                        <span className='text-black'>By</span> Royaloak
                    </p>
                    <h2 className='text-4xl uppercase font-black'>Chico Sofa</h2>
                    <span className='bg-zinc-900 h-1 w-10 rounded-full mt-3'></span>
                    <span className='text-xl font-bold ml-1'>$2999</span>

                    <p className='text-center w-80 my-2 text-zinc-500 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, blanditiis repudiandae. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quas.</p>
                    <div className='my-2 flex flex-col gap-1'>
                        <p className='text-xs w-16 text-center'>Quantity</p>
                        <p className='flex items-center gap-1 w-16 justify-center'>1</p>
                    </div>
                    <button className='py-3 px-5 bg-zinc-950 text-white uppercase tracking-wider text-xss rounded-sm'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default page