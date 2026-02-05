import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "  focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content  w-full rounded-[21.55px]  shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  border-[1.35px] bg-[#FFFFFF0D] border-[#FFFFFF1A] xl:px-[33.67px] xl:py-[22.89px] px-4 py-3 resize-none min-h-[120px] font-normal font-poppins lg:text-[19.44px] leading-[32.32px] tracking-normal",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
