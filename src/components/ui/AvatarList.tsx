import React from 'react'
import Image from "next/image"


const data = [
    {id: 1, src:"/AVATAR5.jpg", statut: "bg-green-500", online: true},
    {id: 2, src:"/avatar4.png", statut: "bg-yellow-500", online: true},
    {id: 3, src:"/avatar3.png", statut: "bg-yellow-500", online: false},
    {id: 4, src:"/avatar2.png", statut: "bg-red-500", online: true},
    {id: 5, src:"/AVATAR6.jpg", statut: "bg-green-500", online: true},
]

const AvatarList = () => {
  return (
    <div className='flex flex-row w-full items-center justify-center -space-x-4 cursor-pointer'>
        {data.map((data) => (
          <div key={data.id} className='flex relative hover:scale-110 hover:-translate-y-2 duration-300 transition-all ease-in-out'>
            <Image src={data.src} alt="avatar" width={100} height={100} 
            className='w-16 h-16 border-2 border-white rounded-full ' />
            <div className={`w-6 h-6 rounded-full ${data.statut} absolute -bottom-2 left-1 border-4 border-slate-950`} />
            {!data.online && <div className={`w-3 h-3 rounded-full bg-slate-950 absolute bottom-0 left-3 border border-slate-950 `} />}
          </div>
        ))}
        

    </div>
  )
}

export default AvatarList