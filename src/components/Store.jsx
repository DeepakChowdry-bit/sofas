import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Store = () => {
    return (
        <div className='flex items-center justify-center w-full h-4/6 py-10'>
            <div className='flex flex-col items-center justify-center w-95 lg:w-90 h-5/6 gap-10'>
                <div className='title flex items-center justify-center w-90 relative'>
                    <h3 className='font-bold uppercase text-sm'>New Arrivals</h3>
                </div>
                <div className='flex flex-wrap items-center justify-center w-full h-full gap-4'>
                    <Link href={'/productpage'}>
                        <div className='flex flex-col items-center justify-between shadow-md rounded-md overflow-hidden'>
                        <Image src="/sofas/sofa (10).jpg" width={200} height={100} alt='' className='w-60 lg:w-64' />
                        <div className='flex flex-col items-center justify-center w-90 h-12'>
                            <h4 className='text-xs font-semibold uppercase tracking-wider'>Industrial</h4>
                            <p className='text-xss font-semibold tracking-wide'>$299.00</p>
                        </div>
                    </div>
                    </Link>
                    
                    <div className='flex flex-col items-center justify-between shadow-md rounded-md overflow-hidden'>
                        <Image src="/sofas/sofa (2).jpg" width={200} height={100} alt='' className='w-60 lg:w-64' />
                        <div className='flex flex-col items-center justify-center w-90 h-12'>
                            <h4 className='text-xs font-semibold uppercase tracking-wider'>Industrial</h4>
                            <p className='text-xss font-semibold tracking-wide'>$299.00</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-between shadow-md rounded-md overflow-hidden'>
                        <Image src="/sofas/sofa (3).jpg" width={200} height={100} alt='' className='w-60 lg:w-64' />
                        <div className='flex flex-col items-center justify-center w-90 h-12'>
                            <h4 className='text-xs font-semibold uppercase tracking-wider'>Industrial</h4>
                            <p className='text-xss font-semibold tracking-wide'>$299.00</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-between shadow-md rounded-md overflow-hidden'>
                        <Image src="/sofas/sofa (7).jpg" width={200} height={100} alt='' className='w-60 lg:w-64' />
                        <div className='flex flex-col items-center justify-center w-90 h-12'>
                            <h4 className='text-xs font-semibold uppercase tracking-wider'>Industrial</h4>
                            <p className='text-xss font-semibold tracking-wide'>$299.00</p>
                        </div>
                    </div>

                </div>
                <button className='py-4 px-8 bg-zinc-950 text-white uppercase tracking-wider text-xs'>Shop All</button>
            </div>
        </div>
    )
}

export default Store