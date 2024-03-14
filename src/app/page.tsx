import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopNavbar from "@/components/TopNavbar";
import WebDevSection from "@/components/WebDevSection";
import {GridBackgroundDemo} from "@/components/ui/BackgroundGrid"
import ClickMeButton from "@/components/ui/ClickMeButton";
import { CardPattern, EvervaultCard } from "@/components/ui/evervault-card";
import { LampContainer } from "@/components/ui/lamp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-zinc-100 snap-y snap-proximity snap-always">
      <MaxWidthWrapper className="snap-start">
        <TopNavbar />
        <HeroSection />
      </MaxWidthWrapper>
      <div className="flex w-full snap-start" id="work">
        <GridBackgroundDemo >
          <MaxWidthWrapper>
            <WebDevSection />
          </MaxWidthWrapper>
        </GridBackgroundDemo>
      </div>
      <div className="flex flex-col bg-slate-950 grid-cols-1 gap-0 w-full min-h-screen items-start justify-start relative text-white snap-start" id="workTwo">
        <LampContainer className="flex w-full h-fit ">
          <div className="text-xl 2xl:text-7xl lg:text-2xl font-semibold pb-8 bg-clip-text text-transparent bg-gradient-to-b from-cyan-500 to-cyan-200 ">
            Explore some of my features
          </div>
        </LampContainer>
        <div className="flex w-full h-full">
        <MaxWidthWrapper>
          <div className="flex w-full mt-16">
            <div className="grid grid-cols-1 2xl:grid-cols-3 w-full gap-8 transition-all duration-500 ease-in-out">
              <div className="flex flex-col w-full items-center justify-center p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                <div className="group cursor-pointer flex text-2xl font-semibold bg-slate-950 rounded-lg  border-blue-500 border-2 relative hover:shadow-lg hover:shadow-blue-500 transition-all duration-500 ease-in-out">
                  <div className="z-0 absolute flex w-full h-full bg-blue-500 border-blue-500 border-2  rounded-sm scale-x-0 group-hover:scale-x-100 transition-all duration-500 ease-in-out" />
                  <h1 className="px-8 py-2 z-10">
                    Hover me
                  </h1>
                </div>
              </div>
              <div className="flex flex-col w-full items-center justify-center p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                <ClickMeButton />
              </div>
              <div className="flex flex-col w-full text-2xl items-center justify-center p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                SOON...
              </div>
              <div className="flex flex-col h-[350px] text-2xl w-full items-center justify-center p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                SOON...
              </div>
              <div className="flex flex-col h-[350px] text-2xl w-full items-center justify-center p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                SOON...
              </div>
              <div className="flex flex-col h-[350px] text-2xl w-full items-center justify-center p-8 rounded-2xl border-2 border-cyan-500/60  hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out">
                SOON...
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        </div>
        
      </div>
    </main>
  );
}
