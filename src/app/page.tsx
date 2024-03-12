import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TopNavbar from "@/components/TopNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-zinc-100">
      <MaxWidthWrapper>
        <TopNavbar />
        <HeroSection />
      </MaxWidthWrapper>
    </main>
  );
}
