"use client"
import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductTemplate from "@/components/ProductTemplate";
import WebDevSection from "@/components/WebDevSection";
import AvatarList from "@/components/ui/AvatarList";
import {GridBackgroundDemo} from "@/components/ui/BackgroundGrid"
import ClickMeButton from "@/components/ui/ClickMeButton";
import { LampContainer } from "@/components/ui/lamp";
import {SparklesPreview} from "@/components/SparklesComponent";
import SliderShow from "@/components/SliderShow";
import { Suspense, useRef } from "react";
import LoadingPage from "@/components/LoadingPage";


export default function Home() {

  const startDiv = useRef<HTMLDivElement>(null)
  const workDiv = useRef<HTMLDivElement>(null)
  const workTwotDiv = useRef<HTMLDivElement>(null)
  return (
    <Suspense fallback={<LoadingPage />}>
      <main className="flex min-h-screen flex-col w-full bg-zinc-100 snap-y snap-proximity overflow-x-clip">
        <div className="flex w-full min-h-screen snap-start" ref={startDiv} id="startSection"  >
          <MaxWidthWrapper className="snap-start min-h-screen">
          <div className="z-50 absolute top-0 left-0 inset-0 grid grid-cols-5 h-12 items-center justify-center py-2 text-sm 2xl:text-lg lg:text-lg">
              <div className='group flex w-full h-full rounded-lg items-center justify-center  font-semibold cursor-pointer'>
                  <div className='relative py-1'>
                      Home
                      <div className=' group-active:scale-x-100 group-active:opacity-100 transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 opacity-0 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500'/>
                  </div>
              </div>
              <div className='group flex w-full h-full rounded-lg items-center justify-center  font-semibold cursor-pointer'>
                  <div className='relative py-1' onClick={() => {workDiv.current?.scrollIntoView({behavior:"smooth"})}}>
                      Work
                  <div className=' group-active:scale-x-100 group-active:opacity-100 transition-all duration-200 ease-in-out scale-x-0 group-hover:scale-x-100 group-hover:opacity-100 opacity-0 w-full absolute bottom-0 left-0 h-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500'/>
                  </div>
              </div>
              <div className='group flex h-full rounded-lg items-center justify-center text-xl 2xl:text-3xl lg:text-3xl font-bold cursor-pointer'>
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
            <HeroSection />
          </MaxWidthWrapper>
        </div>
        <div className="flex w-full min-h-screen  snap-start" ref={workDiv} id="workSection">
          <GridBackgroundDemo >
            
            <MaxWidthWrapper>
              <WebDevSection >
                <div className='flex flex-row w-full items-center justify-center gap-2 2xl:gap-8 mt-8'>
                    <button className='px-4 2xl:px-8 py-2 bg-black text-white text-lg 2xl:text-2xl lg:text-2xl border-2 border-black rounded-lg' onClick={() => {workTwotDiv.current?.scrollIntoView({behavior:"smooth"})}}>
                      Explore more
                    </button>
                    <button className='px-4 2xl:px-8 py-2  text-black text-lg 2xl:text-2xl lg:text-2xl border-2 border-black rounded-lg'>
                      Hire me
                    </button>
                </div>
              </WebDevSection>
            </MaxWidthWrapper>
          </GridBackgroundDemo>
        </div>
        <div className="flex flex-col  bg-slate-950 grid-cols-1 gap-0 w-full min-h-screen items-start justify-start relative text-white snap-start pb-4" ref={workTwotDiv} id="componentSection">
          <LampContainer className="flex w-full h-fit relative ">
            <div className="-translate-y-12 2xl:-translate-y-6 text-xl lg:text-5xl 2xl:text-7xl font-semibold pb-8 drop-shadow-[5px_5px_8px_#02a9ac] bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 from-10% to-cyan-100 to-70% ">
              Explore some of my features
            </div>
            <div className="absolute top-0 bottom-0 flex w-full h-full">
              <SparklesPreview />
            </div>
          </LampContainer>
          <div className="flex w-full -translate-y-8">
            <MaxWidthWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full gap-8 transition-all duration-500 ease-in-out">
                  <div className="flex flex-col w-full items-center justify-center  p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                    <div className="group cursor-pointer flex text-2xl font-semibold bg-slate-950 rounded-lg  border-blue-500 border-2 relative hover:shadow-lg hover:shadow-blue-500 transition-all duration-500 ease-in-out">
                      <div className="z-0 absolute flex w-full h-full bg-blue-500 border-blue-500 border-2  rounded-sm scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out" />
                        <h1 className="px-8 py-2 z-10">
                          Hover me
                        </h1>
                      </div>
                  </div>
                  <div className="flex flex-col items-center justify-center  p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                    <ClickMeButton />
                  </div>
                  <div className="flex flex-col lg:col-span-2 2xl:col-span-1 w-full text-2xl items-center justify-center  py-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                    <AvatarList />
                  </div>
                  <div className="flex flex-col text-2xl lg:col-span-2 2xl:col-span-1 items-center justify-center ">
                    <ProductTemplate />
                  </div>
                  <div className="2xl:col-span-2  hidden 2xl:flex flex-col text-2xl w-full items-center justify-center p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                      <SliderShow/>
                  </div>
                </div>

            </MaxWidthWrapper>
          </div>
          
        </div>
        <div className="flex w-full min-h-screen snap-start" id="workThree">
          <GridBackgroundDemo className="dark:bg-grid-small-orange-500/[0.5] bg-grid-small-orange-500/[0.5]">
            <MaxWidthWrapper>
              <div className="flex inset-0 items-center justify-center text-5xl font-semibold text-orange-500">
                SOON...
              </div>
            </MaxWidthWrapper>
          </GridBackgroundDemo>
        </div>
      </main>
    </Suspense>
    
  );
}
