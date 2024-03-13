import React from 'react'

const HoverMiniCards = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center mt-16 gap-6'>
        <div className='flex flex-col hover:border border-zinc-300 rounded-lg hover:shadow-lg px-4 items-center justify-center hover:bg-white hover:scale-125 transition-all duration-500 ease-in-out'>
            <h1 className='text-lg font-medium'>
                Title
            </h1>
            <h3 className='text-sm font-normal'>
                Text text
            </h3>
        </div>
        <div className='flex flex-col hover:border border-zinc-300 rounded-lg hover:shadow-lg px-4 items-center justify-center hover:bg-white hover:scale-125 transition-all duration-500 ease-in-out'>
            <h1 className='text-lg font-medium'>
                Title
            </h1>
            <h3 className='text-sm font-normal'>
                Text text
            </h3>
        </div>
        <div className='flex flex-col hover:border border-zinc-300 rounded-lg hover:shadow-lg px-4 items-center justify-center hover:bg-white hover:scale-125 transition-all duration-500 ease-in-out'>
            <h1 className='text-lg font-medium'>
                Title
            </h1>
            <h3 className='text-sm font-normal'>
                Text text
            </h3>
        </div>
    </div>
  )
}

export default HoverMiniCards