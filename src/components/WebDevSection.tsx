import React from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import { SiPrisma, SiTailwindcss, SiTrpc } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const WebDevSection = () => {
  return (
    <div className='flex w-full min-h-dvh justify-center text-5xl font-semibold pt-4'>
        <div className='grid 2xl:grid-cols-6 lg:grid-cols-3 grid-cols-2 w-full h-fit  text-slate-500 cursor-default space-y-6'>
            <div className='flex flex-col gap-2 w-full  items-center justify-center hover:text-black duration-500 transition-all ease-in-out hover:drop-shadow-md hover:-translate-y-4 hover:scale-110'>
                <FaReact className='w-32 h-32' />
                <h1 className='text-xl font-semibold'>
                    React JS
                </h1>
            </div>
            <div className='flex flex-col gap-2 w-full  items-center justify-center hover:text-black duration-500 transition-all ease-in-out hover:drop-shadow-md hover:-translate-y-4 hover:scale-110'>
               <BiLogoTypescript className='w-32 h-32' /> 
               <h1 className='text-xl font-semibold'>
                    Typescript
               </h1>
            </div>
            <div className='flex flex-col gap-2 w-full items-center justify-center hover:text-black duration-500 transition-all ease-in-out hover:drop-shadow-md hover:-translate-y-4 hover:scale-110'>
                <SiTailwindcss className='w-32 h-32' />
                <h1 className='text-xl font-semibold'>
                    Tailwind
                </h1>
            </div>
            <div className='flex flex-col gap-2 w-full  items-center justify-center hover:text-black duration-500 transition-all ease-in-out hover:drop-shadow-md hover:-translate-y-4 hover:scale-110'>
               <TbBrandNextjs className='w-32 h-32' />
               <h1 className='text-xl font-semibold'>
                    Next JS
                </h1> 
            </div>
            <div className='flex flex-col gap-2 w-full  items-center justify-center hover:text-black duration-500 transition-all ease-in-out hover:drop-shadow-md hover:-translate-y-4 hover:scale-110'>
                <SiPrisma className='w-32 h-32' />
                <h1 className='text-xl font-semibold'>
                    Prisma ORM
                </h1>
            </div>
            <div className='flex flex-col gap-2 w-full items-center justify-center hover:text-black duration-500 transition-all ease-in-out hover:drop-shadow-md hover:-translate-y-4 hover:scale-110'>
                <SiTrpc className='w-32 h-32' />
                <h1 className='text-xl font-semibold'>
                    TRPC
                </h1>
            </div>
        </div>
    </div>
  )
}

export default WebDevSection