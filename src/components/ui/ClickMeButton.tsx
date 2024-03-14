"use client"
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'

const ClickMeButton = () => {

    const [before, setBefore] = useState(true)
    const [start, setStart] = useState(false)
    const [end, setEnd] = useState(false)
    const [procces, setProcces] = useState(false)


    const HandeleClick = () => {

        if (!procces) {

            setProcces(true)

            setBefore(false)
            setStart(true)
            setTimeout(() => {
                setStart(false)
                setEnd(true)
            }, 5000)

            setTimeout(() => {
                setEnd(false)
                setBefore(true)
                setProcces(false)
            },8000)
        }
        
    }
  return (
    <div className='flex w-full items-cente justify-center'>
        <div className='flex w-fit items-center justify-center relative   cursor-pointer'
        onClick={() => HandeleClick()}>
            {start && <>
                <motion.div initial={{scaleX:"50%"}} animate={{scaleX:"100%"}} transition={{duration:0.5, ease:"circInOut"}}
                    className='flex w-60 relative border-2 border-blue-500 rounded-lg items-center justify-center '>
                    <motion.div initial={{width:0}} animate={{width:"100%"}} transition={{duration:4, ease:"circInOut", delay:0.6}}
                    className='z-0 absolute top-0 left-0 h-full bg-blue-500 rounded-sm shadow-lg shadow-blue-500' />
                    <motion.div initial={{opacity:0, translateY:8, scaleX:"-10%"}} animate={{opacity:1,translateY:0, scaleX:"100%"}} transition={{duration:0.3, ease:"circInOut", delay:0.4}}
                    className='flex flex-row gap-2 items-center justify-center'>
                        <Loader2 className='animate-spin z-10 w-8 h-8 m-2 ' />  
                        <h3 className='text-sm font-normal'>
                            Proccesing..
                        </h3>
                    </motion.div>
                </motion.div>
            </>}
            {end && 
            <>
                <motion.div initial={{scaleX:"150%"}} animate={{scaleX:"100%"}} transition={{duration:0.5, ease:"circInOut"}}
                className='flex w-44 relative border-2 border-blue-500 rounded-lg items-center justify-center '>
                  <motion.div className='z-10 absolute top-0 left-0 h-full w-full bg-blue-500 rounded-sm' />
                  <motion.div className='z-10 absolute top-0 left-0 h-full w-full shadow-lg shadow-blue-500 rounded-lg' 
                    initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, ease:"circInOut"}}/>
                    <motion.h1 initial={{opacity:0, translateY:8, scaleX:"-10%"}} animate={{opacity:1,translateY:0, scaleX:"100%"}} transition={{duration:0.3, ease:"circInOut"}}
                        className='z-30 text-2xl font-semibold  px-8 py-2 -translate-x-44'>
                        <svg className='w-8 h-8 drop-shadow-xl' viewBox="0 0 1024 1024" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g ><path d="M895.36 243.904a251.52 251.52 0 0 0-355.776 0l-20.096 20.096-20.096-20.096A251.52 251.52 0 0 0 143.616 599.68S466.24 926.72 512 928c14.336 0.384 86.4-59.52 164.224-128.192l-0.512-0.64a22.016 22.016 0 0 0-11.968-40.896 21.76 21.76 0 0 0-14.784 5.888l-0.064-0.064 62.336-56.832a22.08 22.08 0 0 0-7.808 16.704 22.4 22.4 0 0 0 22.4 22.464c5.44 0 10.24-2.176 14.208-5.44l0.256 0.32 50.048-45.76-0.448-0.448a22.08 22.08 0 0 0-16.768-36.992 21.952 21.952 0 0 0-14.656 5.824l80.384-73.472 0.512 0.512a22.08 22.08 0 0 0-5.696 14.592 22.4 22.4 0 0 0 22.4 22.464 22.016 22.016 0 0 0 14.272-5.504l0.32 0.384 24.832-23.168a251.776 251.776 0 0 0-0.128-355.84z" fill=""></path><path d="M510.976 878.656c-51.008-33.344-207.168-180.416-335.488-310.528a206.976 206.976 0 0 1-0.192-292.544c39.04-39.104 91.008-60.608 146.24-60.608s107.136 21.504 146.176 60.544l51.84 51.84 51.84-51.776c39.04-39.04 90.944-60.544 146.176-60.544s107.2 21.504 146.176 60.544c39.04 39.04 60.544 90.944 60.544 146.24s-21.504 107.136-60.544 146.176c-140.096 131.776-301.76 276.032-352.768 310.656z" fill="#FF5F5F"></path><path d="M308.032 641.984a15.872 15.872 0 0 1-10.112-3.648 757.12 757.12 0 0 1-53.504-48.896 875.968 875.968 0 0 0-25.856-24.64C141.376 495.488 145.344 423.616 145.536 420.544 143.808 318.976 237.376 264.64 241.344 262.4a16 16 0 0 1 15.808 27.84c-0.832 0.448-81.088 47.488-79.744 131.2-0.064 3.648-2.368 61.248 62.528 119.552 8.704 7.808 17.536 16.448 26.816 25.536 15.616 15.36 31.808 31.168 51.328 47.104a15.936 15.936 0 1 1-10.048 28.352zM422.656 751.36a15.872 15.872 0 0 1-11.2-4.544l-61.312-60.032a16 16 0 1 1 22.4-22.912l61.312 60.032a16 16 0 0 1-11.2 27.456z" fill="#FFFFFF"></path></g></svg>

                    </motion.h1>  
                </motion.div>
                
            </> }
            {before && 
            <motion.div initial={{scaleX:"60%", opacity:0}} animate={{scaleX:"100%", opacity:1}} transition={{duration:0.5, ease:"circInOut"}}
            className='flex w-44 items-center justify-center border-2 border-blue-500 rounded-lg'>
                <h1 className='z-10 text-2xl font-semibold px-8 py-2'>
                    Click me
                </h1>
            </motion.div>
            }
        </div>
    </div>
  )
}

export default ClickMeButton