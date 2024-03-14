"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


export const LampContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("relative flex h-full flex-col items-center justify-start overflow-clip bg-slate-950 w-full rounded-md z-0",className)}>

        <div className="relative flex w-full flex-1 2xl:scale-y-125 scale-y-100 items-start py-12 justify-center isolate z-0 ">

          <motion.div initial={{ opacity: 0.5, width: "15rem" }} whileInView={{ opacity: 1, width: "80%" }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
            style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`, }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]" >
            <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          <motion.div initial={{ opacity: 0.5, width: "15rem" }} whileInView={{ opacity: 1, width: "80%" }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut"}}
            style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`, }}
            className="absolute inset-auto left-1/2 h-56 w-[100%] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]" >
            <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>


          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
          <div className="absolute inset-auto z-50 h-36 w-[80%] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />

          <motion.div initial={{ width: "8rem" }}  whileInView={{ width: "16rem" }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl" />

          <motion.div initial={{ width: "15rem" }} whileInView={{ width: "80%" }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut", }}
            className="absolute inset-auto z-50 h-0.5 w-[80%]  bg-cyan-400 "/>
   
          
          <div className="relative z-50 flex h-52 w-full flex-col items-center justify-end px-5 ">
            {children}
          </div>
        </div>
        
        
      </div>
    );
  };