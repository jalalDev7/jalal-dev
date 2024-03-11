import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Loader2 } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 2xl:flex-row gap-4 w-full h-full mt-44 '>
        <div className='flex w-full h-full justify-center lg:justify-end 2xl:justify-end items-end 2xl:items-center lg:items-center'>
        <Avatar  className="h-96 w-96" >
            <AvatarImage src="/AVATAR.jpg" alt="avatar" />
            <AvatarFallback>
                <Loader2 className='w-full h-full animate-spin text-neutral-500 opacity-30' />
            </AvatarFallback>
        </Avatar>
        </div>
        <div className='flex flex-col w-full h-full py-8'>
            <div className='flex flex-row text-6xl font-bold'>
                Hi, Im <span className=' px-1 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500'>Jalal</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#fac036" d="M98.66 32.68c-4.62-8.6-7.22-13.43-12.79-20.46c-5.56-7.03-12.14-14.07-19.5-7.78c-3.72 3.17-2.6 8.21.17 13.22c-.47-.31.43 2.16-.01 1.83c-8.35-6.37-10.13-5.67-13.01-3.39c-6.84 5.41 4.96 16.47 8.81 22.4c.66 1.02 3.07 1.97 3.64 2.91c.39.64.76 1.26 1.11 1.86c-.43-.13-.87-.26-1.32-.39c-4.04-1.13-13.32-2.35-17.54-.76C22.04 52 23.36 56.31 25.37 61.97c2.01 5.66 9.35 9.84 21.35 2.38c14.81-6.12 27.11 2.08 27.11 10.6c0 11.7-3.83 18.31-13.88 18.31c-15.89 0-16.74-12.96-25.23-21.45c-2.29-2.29-7.79-2.96-11.04-.61c-7.58 5.49-2.68 16.88-.79 20.69c3.96 7.97 8.84 19.53 21.69 29.95c6.76 5.48 23.53 4.64 33.23 2.66c18.44-3.76 22.15-16.01 28.07-36.98c2.23-7.89 2.53-14.24 2.53-23.05s-5.45-23.78-9.75-31.79"/><path fill="#e48c15" d="M98.3 60.49c-1.18-5.04-10.83-12.92-14.85-15.52c-.41-2.2-6.34-15.14-10.18-20.25c-2.13-2.84-6.07-6.68-7.46-8.44c0 0 .34 1.39-.65 2.19c.38.46 6.15 7.73 8.55 13.13s4.39 11.24 4.39 11.24c-2.61-.87-12.93-4.33-15.78-4.34c0 0 1 .9.98 2.56c-.02 1.55-2.17.73-.98 1.08c7.62 2.21 18.26 4.85 24.82 11.13c2.59 2.49 6.42 7.22 8.22 10.33c1.3 2.22 3.26-1.74 2.94-3.11"/></svg>
            </div>
            <h1 className='text-2xl font-semibold'>
                Fullstack web developer
            </h1>
            
        </div>
    </div>
  )
}

export default HeroSection