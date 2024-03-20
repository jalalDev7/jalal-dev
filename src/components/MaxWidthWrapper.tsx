import React, { ReactNode } from 'react'
import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}) => {
  return (
    <div className={cn('flex flex-col w-full px-4  max-w-[1500px] mx-auto relative', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper