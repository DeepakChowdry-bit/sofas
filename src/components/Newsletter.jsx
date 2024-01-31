import React from 'react'

const Newsletter = () => {
    return (
        <div className='h-60 bg-zinc-200 w-full flex items-center justify-center'>
            <div className='flex flex-col items-center justify-around w-11/12 h-5/6'>
                <div className='flex flex-col items-center gap-2 w-11/12 h-1/2 justify-center'>
                    <h3 className='font-bold text-sm lg:text-xl uppercase'>Join Our Newsletter</h3>
                    <p className='text-xss lg:text-xs tracking-wide text-center uppercase font-semibold'>Subscribe today for free and save 10%  on your first purchase</p>
                </div>
                <div className='flex flex-col items-end lg:w-3/5 md:w-3/5 w-90 h-1/2 justify-center'>
                    <input type="text" className='bg-transparent border-b-2 border-black w-full px-2 py-1 outline-none' placeholder='Your email'/>
                    <button className='py-3 px-8 bg-zinc-950 text-white uppercase tracking-wider text-xss'>Subscribe</button>
                </div>
            </div>

        </div>
    )
}

export default Newsletter