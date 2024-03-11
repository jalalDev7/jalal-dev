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
    <div className={cn('px-4 2xl:px-56 lg:px-12 min-w-max min-h-max relative', className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper