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
    <div className={cn('flex flex-col w-full px-4 2xl:px-56 lg:px-36  relative', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper