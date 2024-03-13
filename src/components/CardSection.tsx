"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { GrSecure } from 'react-icons/gr'
import { MdOutlineWorkspacePremium } from 'react-icons/md'
import { TbSeo } from 'react-icons/tb'

const CardSection = () => {
  return (
    <div className='flex flex-col 2xl:flex-row lg:flex-row w-full mt-16 gap-4 space-y-4'>
        <div className='flex flex-col w-full  items-start justify-center relative'>
            <motion.div
            initial={{left:"100%", opacity:0}} whileInView={{left:0, opacity:1}} transition={{duration:1.5, ease:"circInOut", delay:2.9}} 
            className='absolute rounded-lg left-0 top-0 h-full w-2 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500' />
            <div className='flex flex-row px-6 w-full gap-4 items-center '>
                <svg fill="#000000" className='w-[60px] h-[60px] 2xl:w-[85px] 2xl:h-[85px]' viewBox="0 0 487.16 487.16">
                    <g></g><g  strokeLinecap="round" strokeLinejoin="round" stroke="#050505" strokeWidth="5.8459200000000004"> <g> <path d="M240.934,291.482c-13.116,0-23.787,10.671-23.787,23.787c0,13.116,10.671,23.787,23.787,23.787 c13.116,0,23.787-10.671,23.787-23.787C264.721,302.152,254.05,291.482,240.934,291.482z M240.934,330.556 c-8.43,0-15.287-6.857-15.287-15.287c0-8.43,6.857-15.287,15.287-15.287c8.43,0,15.287,6.857,15.287,15.287 C256.221,323.698,249.363,330.556,240.934,330.556z"></path> <path d="M453.605,5.261H33.555C15.053,5.261,0,20.315,0,38.817v301.727c0,18.503,15.053,33.556,33.555,33.556h147.497 l-17.482,58.059h-1.96c-14.255,0-25.853,11.599-25.853,25.855v19.635c0,2.348,1.902,4.25,4.25,4.25h207.145 c2.348,0,4.25-1.902,4.25-4.25v-19.635c0-14.257-11.6-25.855-25.857-25.855h-1.956l-17.483-58.059h147.498 c18.502,0,33.555-15.053,33.555-33.556V38.817C487.16,20.315,472.107,5.261,453.605,5.261z M33.555,13.761h420.051 c13.815,0,25.055,11.24,25.055,25.057v1.169h-90.997c-2.348,0-4.25,1.902-4.25,4.25c0,2.348,1.902,4.25,4.25,4.25h90.997v222.043 H8.5v-8.803h170.689c2.348,0,4.25-1.902,4.25-4.25c0-2.348-1.902-4.25-4.25-4.25H8.5V38.817 C8.5,25.001,19.739,13.761,33.555,13.761z M342.902,458.015v15.385H144.258v-15.385c0-9.569,7.784-17.355,17.353-17.355h163.936 C335.116,440.659,342.902,448.445,342.902,458.015z M314.713,432.159H172.447l17.481-58.059H297.23L314.713,432.159z M453.605,365.601H33.555c-13.815,0-25.055-11.24-25.055-25.056v-29.929h77.893c2.348,0,4.25-1.902,4.25-4.25 c0-2.348-1.902-4.25-4.25-4.25H8.5v-23.087h470.16v61.516C478.66,354.36,467.421,365.601,453.605,365.601z"></path> <path d="M303.668,48.486h61.496c2.348,0,4.25-1.902,4.25-4.25c0-2.348-1.902-4.25-4.25-4.25h-61.496c-2.348,0-4.25,1.902-4.25,4.25 C299.418,46.584,301.32,48.486,303.668,48.486z"></path> <path d="M72.581,118.591c18.196,0,33-14.804,33-33c0-6.51-1.902-12.579-5.169-17.698c6.516-2.948,20.938-8.394,38.964-8.59 c0.35-0.004,0.695-0.006,1.043-0.006c31.787,0,59.356,15.937,81.994,47.374l-29.161-6.479c-2.286-0.51-4.561,0.936-5.07,3.227 c-0.51,2.291,0.936,4.562,3.227,5.07l40.5,9c0.306,0.068,0.614,0.102,0.922,0.102c1.006,0,1.991-0.357,2.77-1.026 c1.016-0.873,1.561-2.173,1.471-3.51l-3-44.5c-0.157-2.341-2.16-4.113-4.526-3.954c-2.342,0.158-4.112,2.185-3.954,4.526 l2.043,30.3c-30.207-40.482-64.504-48.841-88.349-48.622c-21.802,0.237-38.592,7.428-44.542,10.356 c-5.862-5.322-13.64-8.569-22.161-8.569c-18.196,0-33,14.804-33,33C39.581,103.787,54.385,118.591,72.581,118.591z M72.581,61.091 c13.51,0,24.5,10.99,24.5,24.5c0,13.51-10.99,24.5-24.5,24.5c-13.51,0-24.5-10.99-24.5-24.5 C48.081,72.081,59.071,61.091,72.581,61.091z"></path> <path d="M210.061,173.031c-1.016,0.873-1.561,2.173-1.471,3.51l3,44.5c0.151,2.244,2.018,3.964,4.236,3.964 c0.096,0,0.192-0.003,0.29-0.01c2.342-0.158,4.112-2.185,3.954-4.526l-2.059-30.538c29.454,37.853,62.269,46.16,85.372,46.16 c0.155,0,0.313,0,0.467-0.001c21.825-0.105,38.556-7.275,44.333-10.115c4.508,12.863,16.764,22.115,31.147,22.115 c18.196,0,33-14.804,33-33s-14.804-33-33-33c-18.196,0-33,14.804-33,33c0,0.758,0.035,1.506,0.086,2.251 c-0.086,0.041-0.175,0.066-0.259,0.113c-0.179,0.102-18.208,10.117-42.717,10.137c-0.025,0-0.05,0-0.075,0 c-30.775,0-57.66-15.017-80-44.642l29.043,6.454c2.293,0.514,4.563-0.935,5.07-3.227c0.51-2.291-0.935-4.562-3.226-5.07l-40.5-9 C212.448,171.816,211.077,172.158,210.061,173.031z M379.33,190.59c13.51,0,24.5,10.99,24.5,24.5c0,13.51-10.99,24.5-24.5,24.5 s-24.5-10.99-24.5-24.5C354.83,201.58,365.82,190.59,379.33,190.59z"></path> <path d="M313.571,146.77c0.757,0.553,1.635,0.819,2.505,0.819c1.31,0,2.603-0.604,3.435-1.741l14.491-19.819l19.819,14.491 c0.757,0.553,1.635,0.819,2.505,0.819c1.31,0,2.603-0.604,3.435-1.741c1.386-1.896,0.973-4.554-0.922-5.939l-19.819-14.491 l14.491-19.819c1.386-1.896,0.973-4.554-0.922-5.939c-1.897-1.386-4.555-0.972-5.939,0.922l-14.491,19.819l-19.819-14.491 c-1.897-1.386-4.556-0.972-5.939,0.922c-1.386,1.896-0.973,4.554,0.922,5.939l19.819,14.491l-14.491,19.819 C311.264,142.727,311.677,145.385,313.571,146.77z"></path> </g> </g><g id="SVGRepo_iconCarrier"> <g> <path d="M240.934,291.482c-13.116,0-23.787,10.671-23.787,23.787c0,13.116,10.671,23.787,23.787,23.787 c13.116,0,23.787-10.671,23.787-23.787C264.721,302.152,254.05,291.482,240.934,291.482z M240.934,330.556 c-8.43,0-15.287-6.857-15.287-15.287c0-8.43,6.857-15.287,15.287-15.287c8.43,0,15.287,6.857,15.287,15.287 C256.221,323.698,249.363,330.556,240.934,330.556z"></path> <path d="M453.605,5.261H33.555C15.053,5.261,0,20.315,0,38.817v301.727c0,18.503,15.053,33.556,33.555,33.556h147.497 l-17.482,58.059h-1.96c-14.255,0-25.853,11.599-25.853,25.855v19.635c0,2.348,1.902,4.25,4.25,4.25h207.145 c2.348,0,4.25-1.902,4.25-4.25v-19.635c0-14.257-11.6-25.855-25.857-25.855h-1.956l-17.483-58.059h147.498 c18.502,0,33.555-15.053,33.555-33.556V38.817C487.16,20.315,472.107,5.261,453.605,5.261z M33.555,13.761h420.051 c13.815,0,25.055,11.24,25.055,25.057v1.169h-90.997c-2.348,0-4.25,1.902-4.25,4.25c0,2.348,1.902,4.25,4.25,4.25h90.997v222.043 H8.5v-8.803h170.689c2.348,0,4.25-1.902,4.25-4.25c0-2.348-1.902-4.25-4.25-4.25H8.5V38.817 C8.5,25.001,19.739,13.761,33.555,13.761z M342.902,458.015v15.385H144.258v-15.385c0-9.569,7.784-17.355,17.353-17.355h163.936 C335.116,440.659,342.902,448.445,342.902,458.015z M314.713,432.159H172.447l17.481-58.059H297.23L314.713,432.159z M453.605,365.601H33.555c-13.815,0-25.055-11.24-25.055-25.056v-29.929h77.893c2.348,0,4.25-1.902,4.25-4.25 c0-2.348-1.902-4.25-4.25-4.25H8.5v-23.087h470.16v61.516C478.66,354.36,467.421,365.601,453.605,365.601z"></path> <path d="M303.668,48.486h61.496c2.348,0,4.25-1.902,4.25-4.25c0-2.348-1.902-4.25-4.25-4.25h-61.496c-2.348,0-4.25,1.902-4.25,4.25 C299.418,46.584,301.32,48.486,303.668,48.486z"></path> <path d="M72.581,118.591c18.196,0,33-14.804,33-33c0-6.51-1.902-12.579-5.169-17.698c6.516-2.948,20.938-8.394,38.964-8.59 c0.35-0.004,0.695-0.006,1.043-0.006c31.787,0,59.356,15.937,81.994,47.374l-29.161-6.479c-2.286-0.51-4.561,0.936-5.07,3.227 c-0.51,2.291,0.936,4.562,3.227,5.07l40.5,9c0.306,0.068,0.614,0.102,0.922,0.102c1.006,0,1.991-0.357,2.77-1.026 c1.016-0.873,1.561-2.173,1.471-3.51l-3-44.5c-0.157-2.341-2.16-4.113-4.526-3.954c-2.342,0.158-4.112,2.185-3.954,4.526 l2.043,30.3c-30.207-40.482-64.504-48.841-88.349-48.622c-21.802,0.237-38.592,7.428-44.542,10.356 c-5.862-5.322-13.64-8.569-22.161-8.569c-18.196,0-33,14.804-33,33C39.581,103.787,54.385,118.591,72.581,118.591z M72.581,61.091 c13.51,0,24.5,10.99,24.5,24.5c0,13.51-10.99,24.5-24.5,24.5c-13.51,0-24.5-10.99-24.5-24.5 C48.081,72.081,59.071,61.091,72.581,61.091z"></path> <path d="M210.061,173.031c-1.016,0.873-1.561,2.173-1.471,3.51l3,44.5c0.151,2.244,2.018,3.964,4.236,3.964 c0.096,0,0.192-0.003,0.29-0.01c2.342-0.158,4.112-2.185,3.954-4.526l-2.059-30.538c29.454,37.853,62.269,46.16,85.372,46.16 c0.155,0,0.313,0,0.467-0.001c21.825-0.105,38.556-7.275,44.333-10.115c4.508,12.863,16.764,22.115,31.147,22.115 c18.196,0,33-14.804,33-33s-14.804-33-33-33c-18.196,0-33,14.804-33,33c0,0.758,0.035,1.506,0.086,2.251 c-0.086,0.041-0.175,0.066-0.259,0.113c-0.179,0.102-18.208,10.117-42.717,10.137c-0.025,0-0.05,0-0.075,0 c-30.775,0-57.66-15.017-80-44.642l29.043,6.454c2.293,0.514,4.563-0.935,5.07-3.227c0.51-2.291-0.935-4.562-3.226-5.07l-40.5-9 C212.448,171.816,211.077,172.158,210.061,173.031z M379.33,190.59c13.51,0,24.5,10.99,24.5,24.5c0,13.51-10.99,24.5-24.5,24.5 s-24.5-10.99-24.5-24.5C354.83,201.58,365.82,190.59,379.33,190.59z"></path> <path d="M313.571,146.77c0.757,0.553,1.635,0.819,2.505,0.819c1.31,0,2.603-0.604,3.435-1.741l14.491-19.819l19.819,14.491 c0.757,0.553,1.635,0.819,2.505,0.819c1.31,0,2.603-0.604,3.435-1.741c1.386-1.896,0.973-4.554-0.922-5.939l-19.819-14.491 l14.491-19.819c1.386-1.896,0.973-4.554-0.922-5.939c-1.897-1.386-4.555-0.972-5.939,0.922l-14.491,19.819l-19.819-14.491 c-1.897-1.386-4.556-0.972-5.939,0.922c-1.386,1.896-0.973,4.554,0.922,5.939l19.819,14.491l-14.491,19.819 C311.264,142.727,311.677,145.385,313.571,146.77z"></path> </g> </g></svg>
                <div className='flex flex-col'>
                    <h1 className='text-xl 2xl:text-2xl font-semibold ' >
                        Web search friendly
                    </h1>
                    <h3 className='text-sm 2xl:text-lg font-normal'>
                        Target your audiance, get more trafiic.
                    </h3>
                </div>
                
            </div>
        </div>
        <div className='flex flex-col w-full items-start justify-center relative'>
            <motion.div
            initial={{left:"100%", opacity:0}} whileInView={{left:0, opacity:1}} transition={{duration:1.5, ease:"circInOut", delay:2.9}} 
            className='absolute rounded-lg left-0 top-0 h-full w-2 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500' />
            <div className='flex flex-row px-6 w-full gap-4 items-center'>
                <svg fill="#000000" className='w-[60px] h-[60px] 2xl:w-[85px] 2xl:h-[85px]' viewBox="0 0 512.001 512.001" >
                    <g></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <g> <g> <g> <path d="M466.395,88.411C395.95,69.109,325.091,39.054,261.478,1.496c-3.379-1.995-7.572-1.995-10.95,0 C185.08,40.133,118.05,68.562,45.605,88.411c-4.68,1.281-7.924,5.535-7.924,10.388v110.046 c0,113.323,52.279,188.335,96.137,231.306c47.216,46.265,102.216,71.85,122.185,71.85c19.967,0,74.967-25.585,122.183-71.85 c43.857-42.97,96.133-117.982,96.133-231.306V98.798C474.319,93.946,471.075,89.692,466.395,88.411z M452.779,208.844 c0,105.843-48.761,175.838-89.669,215.92c-46.431,45.495-96.074,65.695-107.107,65.695c-11.033,0-60.679-20.2-107.111-65.695 c-40.907-40.083-89.67-110.077-89.67-215.92V106.974C128.5,87.304,193.018,59.853,256.005,23.25 c61.414,35.632,129.151,64.448,196.774,83.72V208.844z"></path> <path d="M160.538,105.769c-2.18-5.535-8.433-8.254-13.969-6.073c-19.24,7.581-38.988,14.559-58.695,20.741 c-4.491,1.41-7.547,5.57-7.547,10.276v41.591c0,5.948,4.823,10.77,10.77,10.77s10.77-4.822,10.77-10.77v-33.72 c17.679-5.72,35.339-12.047,52.598-18.848C160,117.557,162.719,111.304,160.538,105.769z"></path> <path d="M180.997,107.812c1.445,0,2.912-0.291,4.319-0.905l0.198-0.086c5.449-2.388,7.903-8.731,5.515-14.178 c-2.39-5.449-8.769-7.914-14.212-5.528l-0.174,0.075c-5.452,2.381-7.914,8.719-5.533,14.169 C172.877,105.405,176.842,107.812,180.997,107.812z"></path> <path d="M384.322,347.283c-4.977-3.253-11.651-1.854-14.908,3.125c-8.875,13.584-19.287,26.592-30.951,38.659 c-9.592,9.922-19.986,19.17-30.893,27.485c-4.729,3.606-5.639,10.364-2.034,15.095c2.121,2.779,5.328,4.241,8.572,4.241 c2.278,0,4.573-0.719,6.523-2.207c11.765-8.971,22.975-18.944,33.317-29.642c12.611-13.044,23.881-27.124,33.499-41.849 C390.702,357.21,389.301,350.536,384.322,347.283z"></path> <path d="M282.558,433.443l-0.618,0.364c-5.147,2.981-6.906,9.569-3.926,14.716c1.997,3.45,5.612,5.376,9.331,5.376 c1.83,0,3.688-0.467,5.385-1.452l0.713-0.419c5.133-3.006,6.857-9.603,3.851-14.736 C294.286,432.161,287.688,430.44,282.558,433.443z"></path> <path d="M182.589,234.019c-6.613-6.614-15.408-10.254-24.762-10.254s-18.15,3.641-24.766,10.254 c-13.653,13.656-13.653,35.876,0,49.531l63.596,63.594c6.614,6.612,15.409,10.253,24.764,10.253s18.15-3.641,24.765-10.255 L378.947,214.38c13.652-13.659,13.652-35.876-0.002-49.527c-6.614-6.614-15.409-10.254-24.765-10.254 c-9.355,0-18.15,3.641-24.765,10.254L221.42,272.848L182.589,234.019z M344.647,180.085c2.545-2.545,5.932-3.946,9.534-3.946 c3.604,0,6.988,1.401,9.535,3.946c5.255,5.255,5.255,13.809-0.002,19.066l-132.759,132.76c-2.545,2.545-5.932,3.946-9.534,3.946 s-6.989-1.401-9.535-3.946l-63.594-63.592c-5.257-5.257-5.257-13.811-0.002-19.066c2.546-2.545,5.933-3.948,9.536-3.948 s6.988,1.401,9.533,3.946l46.445,46.446c2.021,2.019,4.759,3.154,7.616,3.154s5.595-1.134,7.614-3.154L344.647,180.085z"></path> </g> </g> </g> </g></svg>
                <div className='flex flex-col'>
                    <h1 className='text-xl 2xl:text-2xl font-semibold' >
                        Secure and safe apps
                    </h1>
                    <h3 className='text-sm 2xl:text-lg font-normal'>
                        Build secure web apps
                    </h3>
                </div>
            </div>
        </div>
        <div className='flex flex-row w-full items-start justify-center relative'>
            <motion.div
            initial={{left:"100%", opacity:0}} whileInView={{left:0, opacity:1}} transition={{duration:1.5, ease:"circInOut", delay:2.9}} 
            className='absolute rounded-lg left-0 top-0 h-full w-2 bg-gradient-to-b from-orange-500 via-yellow-500 to-orange-500' />
            <div className='flex flex-row px-6 w-full gap-4 items-center'>
                <svg fill="#000000" className='w-[60px] h-[60px] 2xl:w-[85px] 2xl:h-[85px]' viewBox="0 0 480 480" >
                    <g></g><g strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M456,232V56c0-22.056-17.944-40-40-40H64c-22.056,0-40,17.944-40,40v120c-13.232,0-24,10.768-24,24v240 c0,13.232,10.768,24,24,24h176c13.232,0,24-10.768,24-24h67.048c7.544,0,14.496-3.44,19.072-9.432s6.064-13.608,4.08-20.88 L298.472,352H344v88c0,13.232,10.768,24,24,24h88c13.232,0,24-10.768,24-24V256C480,242.768,469.232,232,456,232z M208,440 c0,4.408-3.592,8-8,8H24c-4.408,0-8-3.592-8-8v-16h192V440z M208,408H16V232h192V408z M208,216H16v-16c0-4.408,3.592-8,8-8h176 c4.408,0,8,3.592,8,8V216z M298.768,413.896c0.664,2.424,0.168,4.96-1.36,6.96s-3.84,3.144-6.36,3.144H224v-16h73.16 L298.768,413.896z M224,392v-40h57.888l10.912,40H224z M344,336H224v-48h120V336z M344,256v16H224v-72c0-13.232-10.768-24-24-24 H40V56c0-13.232,10.768-24,24-24h352c13.232,0,24,10.768,24,24v176h-72C354.768,232,344,242.768,344,256z M464,440 c0,4.408-3.592,8-8,8h-88c-4.408,0-8-3.592-8-8v-16h104V440z M464,408H360V288h104V408z M464,272H360v-16c0-4.408,3.592-8,8-8h88 c4.408,0,8,3.592,8,8V272z"></path> </g> </g> <g> <g> <rect x="41.372" y="327.994" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -218.8385 143.6649)" width="45.256" height="16"></rect> </g> </g> <g> <g> <rect x="60.114" y="319.995" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -194.4378 186.5751)" width="135.767" height="16"></rect> </g> </g> <g> <g> <rect x="86.054" y="272.005" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -162.8477 166.8601)" width="67.879" height="16"></rect> </g> </g> <g> <g> <rect x="375.705" y="324.008" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -116.4408 382.9028)" width="56.559" height="16"></rect> </g> </g> <g> <g> <rect x="391.702" y="356.042" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -134.4066 403.5971)" width="56.559" height="16"></rect> </g> </g> <g> <g> <rect x="206.052" y="128.002" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -25.876 209.5337)" width="67.879" height="16"></rect> </g> </g> <g> <g> <rect x="278.057" y="112.001" transform="matrix(0.7071 -0.7071 0.7071 0.7071 6.5281 255.7627)" width="67.879" height="16"></rect> </g> </g> <g> <g> <rect x="233.364" y="168.01" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -49.4797 232.5655)" width="45.256" height="16"></rect> </g> </g> <g> <g> <rect x="273.302" y="72.062" transform="matrix(0.7071 -0.7071 0.7071 0.7071 30.0796 232.7427)" width="45.368" height="16"></rect> </g> </g> <g> <g> <rect x="56" y="48" width="16" height="16"></rect> </g> </g> <g> <g> <rect x="88" y="48" width="16" height="16"></rect> </g> </g> <g> <g> <rect x="120" y="48" width="16" height="16"></rect> </g> </g> </g></svg>
                <div className='flex flex-col'>
                    <h1 className='text-xl 2xl:text-2xl font-semibold' >
                        Modern and responsive
                    </h1>
                    <h3 className='text-sm 2xl:text-lg font-normal'>
                        Make your style on all devices.
                    </h3>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default CardSection