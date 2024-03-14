import React from 'react'
import Image from "next/image"


const data = [
    {id: 1, src:"/AVATAR5.jpg"},
    {id: 2, src:"/avatar4.png"},
    {id: 3, src:"/avatar3.png"},
    {id: 4, src:"/avatar2.png"},
    {id: 5, src:"/AVATAR6.jpg"},
]

const AvatarList = () => {
  return (
    <div className='flex flex-row w-full items-center justify-center -space-x-6 cursor-pointer'>
        {data.map((data) => (
           <Image key={data.id} src={data.src} alt="avatar" width={100} height={100} 
            className='w-16 h-16 border-2 border-white rounded-full hover:scale-110 hover:-translate-y-2 duration-300 transition-all ease-in-out' />
        ))}
        

    </div>
  )
}

export default AvatarList