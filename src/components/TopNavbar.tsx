"use client"
import { cn } from '@/lib/utils'
import React from 'react'

const TopNavbar = () => {
    
  return (

        <div className="w-full grid grid-cols-5 h-12 items-center justify-center py-2 text-sm 2xl:text-lg lg:text-lg">
            <div className='group flex w-full h-full rounded-lg items-center justify-center  font-semibold cursor-pointer'>
                <div className='relative py-1'>
                    Home
                    <div className=' group-active:scale-x-100 group-active:opacity-100 transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 opacity-0 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500'/>
                </div>
            </div>
            <div className='group flex w-full h-full rounded-lg items-center justify-center  font-semibold cursor-pointer'>
                <div className='relative py-1'>
                    Work
                    <div className=' group-active:scale-x-100 group-active:opacity-100 transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 opacity-0 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500'/>
                </div>
            </div>
            <div className='group flex w-full h-full rounded-lg items-center justify-center text-2xl 2xl:text-3xl lg:text-3xl font-bold cursor-pointer'>
                <div className='relative pb-1'>
                    JDev
                    <div className='  opacity-100 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500'/>
                </div>
            </div>
            <div className='group flex w-full h-full rounded-lg items-center justify-center  font-semibold cursor-pointer'>
                <div className='relative py-1'>
                    Hire me
                    <div className=' group-active:scale-x-100 group-active:opacity-100 transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 opacity-0 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500'/>
                </div>
            </div>
            <div className='group flex w-full h-full rounded-lg items-center justify-center font-semibold cursor-pointer'>
                <div className='relative py-1'>
                    Contact
                    <div className=' group-active:scale-x-100 group-active:opacity-100 transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 opacity-0 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500'/>
                </div>
                
            </div>
        </div>

    
  )
}

export default TopNavbar