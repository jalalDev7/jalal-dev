import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopNavbar from "@/components/TopNavbar";
import WebDevSection from "@/components/WebDevSection";
import {GridBackgroundDemo} from "@/components/ui/BackgroundGrid"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-zinc-100 snap-y snap-mandatory">
      <MaxWidthWrapper className="snap-center">
        <TopNavbar />
        <HeroSection />
      </MaxWidthWrapper>
      <div className="flex w-full snap-center">
        <GridBackgroundDemo >
          <MaxWidthWrapper>
            <WebDevSection />
          </MaxWidthWrapper>
        </GridBackgroundDemo>
      </div>
      
    </main>
  );
}
