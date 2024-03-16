"use client"
import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductTemplate from "@/components/ProductTemplate";
import TopNavbar from "@/components/TopNavbar";
import WebDevSection from "@/components/WebDevSection";
import AvatarList from "@/components/ui/AvatarList";
import {GridBackgroundDemo} from "@/components/ui/BackgroundGrid"
import ClickMeButton from "@/components/ui/ClickMeButton";
import { LampContainer } from "@/components/ui/lamp";
import {SparklesPreview} from "@/components/SparklesComponent";
import SliderShow from "@/components/SliderShow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-zinc-100 snap-y snap-proximity overflow-x-clip">
      <div className="flex w-full min-h-screen snap-start">
        <MaxWidthWrapper className="snap-start min-h-screen">
          <TopNavbar />
          <HeroSection />
        </MaxWidthWrapper>
      </div>
      <div className="flex w-full min-h-screen  snap-start" id="work">
        <GridBackgroundDemo >
          <MaxWidthWrapper>
            <WebDevSection />
          </MaxWidthWrapper>
        </GridBackgroundDemo>
      </div>
      <div className="flex flex-col  bg-zinc-950 grid-cols-1 gap-0 w-full min-h-screen items-start justify-start relative text-white snap-start pb-4" id="workTwo">
        <LampContainer className="flex w-full h-fit relative ">
          <div className="-translate-y-12 2xl:-translate-y-6 text-2xl 2xl:text-7xl lg:text-2xl font-semibold pb-8 drop-shadow-[5px_5px_8px_#02a9ac] bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 from-10% to-cyan-100 to-70% ">
            Explore some of my features
          </div>
          <div className="absolute top-0 bottom-0 flex w-full h-full">
            <SparklesPreview />
          </div>
        </LampContainer>
        <div className="flex h-full w-full -translate-y-8">
          <MaxWidthWrapper>
            <div className="flex w-full">
              <div className="grid grid-cols-1 2xl:grid-cols-3 w-full gap-8 transition-all duration-500 ease-in-out">
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
                <div className="flex flex-col w-full text-2xl items-center justify-center  p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                  <AvatarList />
                </div>
                <div className="flex flex-col text-2xl w-full items-center justify-center ">
                  <ProductTemplate />
                </div>
                <div className="2xl:col-span-2 hidden 2xl:flex flex-col text-2xl w-full items-center justify-center p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                    <SliderShow/>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
        
      </div>
      <div className="flex w-full min-h-screen snap-start" id="workThree">
        <GridBackgroundDemo className="dark:bg-grid-small-orange-500/[0.5] bg-grid-small-orange-500/[0.5]">
          <MaxWidthWrapper>
            <div className="flex inset-0 items-center justify-center text-5xl font-semibold">
              SOON...
            </div>
          </MaxWidthWrapper>
        </GridBackgroundDemo>
      </div>
    </main>
  );
}
