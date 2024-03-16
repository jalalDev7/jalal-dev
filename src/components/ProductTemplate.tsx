"use client"
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import Image from "next/image"

const ProductTemplate = () => {
  return (
    <div className='flex w-full h-full'>
        <BackgroundGradient className='flex w-full h-full bg-slate-950 rounded-3xl'>
            <div className='flex flex-col h-full'>
                <div className='flex w-full justify-center'>
                    <Image  src={"/product1.png"} alt="avatar" width={1000} height={1000} className='w-44 h-44 2xl:w-72 2xl:h-72  drop-shadow-[5px_5px_8px_#02a9ac]' />
                </div>
                <div className='flex flex-col w-full 2xl:hidden'>
                    <h1 className=' px-2 2xl:px-4 text-xl font-semibold text-left items-start pb-2'>
                        Sneakers Running Shoes Colors
                    </h1>
                    <h3 className='flex px-2 2xl:px-4 text-sm font-normal items-start text-wrap text-white/50'>
                        The above sneakers running shoes color PNG 
                    </h3>
                    <h3 className='flex px-2 2xl:px-4 text-sm font-normal items-start text-wrap text-white/50'>
                        image is designed by our dedicated and 
                    </h3>
                    <h3 className='flex px-4 text-sm font-normal items-start text-wrap text-white/50'>
                        professional designers.
                    </h3>
                </div>
                <div className='hidden flex-col w-full 2xl:flex'>
                    <h1 className=' px-2 2xl:px-4 text-xl font-semibold text-left items-start pb-2'>
                        Sneakers Running Shoes Colors
                    </h1>
                    <h3 className='flex px-2 2xl:px-4 text-sm font-normal items-start text-wrap text-white/50'>
                        The above sneakers running shoes color PNG image is designed
                    </h3>
                    <h3 className='flex px-2 2xl:px-4 text-sm font-normal items-start text-wrap text-white/50'>
                         by our dedicated and professional designers.
                    </h3>
                </div>
                <div className='flex w-full py-4 px-2 2xl:px-4 text-sm font-semibold text-white cursor-pointer'>
                    <div className='flex w-fit  rounded-2xl bg-slate-500 text-slate-950'>
                        <h1 className='px-2 py-1 text-white'>
                            Buy
                        </h1>
                        <div className='px-2 py-1 bg-slate-800 rounded-2xl text-white'>
                            99$
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundGradient>
    </div>
  )
}

export default ProductTemplate