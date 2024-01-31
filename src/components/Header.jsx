"use client"

import React, { Suspense } from 'react'
import { useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiSearchLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

const Header = () => {

  const ref = useRef();
  const opensearch = () => {
    if (ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("-translate-x-full");
      ref.current.classList.add("-translate-x-0");
    } else {
      ref.current.classList.remove("-translate-x-0");
      ref.current.classList.add("-translate-x-full");
    }
  };

  return (
    <>
      {/* Desktop navigation */}
      <div className='hidden sm:flex h-24 fixed w-full justify-center flex-col items-center bg-white shadow-md z-10'>
        <div className='flex w-90 items-center justify-between'>
          <div>
            <Image src='/sofas/bag (1).png' width={100} height={100} alt='Logo' />
          </div>
          <div>
            <div className='flex items-center gap-6 text-xss font-medium uppercase'>
              <Link href={''} >Collecion</Link>
              <Link href={''} >Catalog</Link>
              <Link href={''} >About</Link>
              <Link href={''} >Blog</Link>
            </div>
          </div>
          <div className='flex items-center gap-8 uppercase'>
            <p className='flex items-center text-xss gap-1 font-medium'>
              <RiSearchLine className='text-sm' onClick={opensearch} /></p>
            <p className='flex items-center text-xss gap-1 font-medium'>
              <FiUser className='text-sm' /> My Account</p>
            <p className='flex items-center text-xss gap-1 font-medium'>
              <LiaShoppingBagSolid className='text-sm' /> Cart</p>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className='mini-header sm:hidden h-20 fixed w-full flex justify-center flex-col items-center z-10'>
        <div className='flex w-90 items-center justify-between'>
          <div>
            <Image src='/sofas/bag (1).png' width={100} height={100} alt='Logo' />
          </div>
          <div>
            <div className='items-center gap-6 text-xss font-medium uppercase hidden'>
              <Link href={''} >Collecion</Link>
              <Link href={''} >Catalog</Link>
              <Link href={''} >About</Link>
              <Link href={''} >Blog</Link>
            </div>
          </div>
          <div className='flex items-center gap-6 uppercase'>
            <p className='flex items-center font-medium justify-center'>
              <RiSearchLine className='text-lg  rounded-full' onClick={opensearch} />
            </p>
            <p className='flex items-center font-medium'>
              <FiUser className='text-lg' />
            </p>
            {/* <p className='flex items-center font-medium'>
              <LiaShoppingBagSolid className='text-xl' /></p> */}
          </div>
        </div>
      </div>

        <Suspense fallback={<p>Loading feed...</p>}>
          <Link href={'/cart'}>
      <p className='sm:hidden flex items-center justify-center font-medium fixed bottom-6 right-6 w-12 bg-black h-12 rounded-full'>
        <LiaShoppingBagSolid className='text-xl z-10  text-white' />
      </p>
      </Link>
        </Suspense>
      

      <div ref={ref} className='sm:flex fixed h-screen w-85 lg:w-4/12 md:w-6/12 bg-white z-10 flex flex-col items-center shadow-md -translate-x-full transition border-r-2 border-zinc-300'>
        <div className='flex h-20 lg:h-24 md:h-24 items-center justify-between w-90 uppercase text-xs font-medium tracking-wide'>
          <h3>Search</h3>
          <h3 className='cursor-pointer' onClick={opensearch}>Close</h3>
        </div>
        <div className='w-full flex justify-center'>
          <div className='flex items-center border-b-2 border-black gap-2 py-1 w-85'>
            <RiSearchLine className='text-sm' />
            <input type="text" placeholder='Search Product' className='bg-transparent outline-none' />
          </div>
        </div>
      </div>
    </>

  )
}

export default Header