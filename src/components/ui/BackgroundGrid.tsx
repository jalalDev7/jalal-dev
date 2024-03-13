import React, { ReactNode } from "react";

export function GridBackgroundDemo({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) {
  return (
    <div className="h-auto w-full dark:bg-black bg-zinc-100  dark:bg-dot-orange-500/[0.5] bg-dot-orange-500/[0.5] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-zinc-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex w-full relative z-20">
        {children}
      </div>
      
    </div>
  );
}
