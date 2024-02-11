"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-[6px] w-1/2 bg-darkBrightBlue overflow-hidden rounded-[4px] ", className)}
    {...props}>
    <ProgressPrimitive.Indicator
      className="h-[6px] w-full flex-1 bg-darkWhite transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
