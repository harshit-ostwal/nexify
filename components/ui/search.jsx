import * as React from "react"

import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react";

const Search = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (
      <div className="flex items-center h-full gap-2 p-2 duration-300 border rounded-md group w-96 border-neutral-400 hover:border-neutral-800">
        <SearchIcon size={18} color="gray" />
        <input
          type={type}
          className={cn(
            "focus:outline-none placeholder:text-neutral-400 w-full mt-[2px]",
            className
          )}
          ref={ref}
          {...props} >
        </input>
      </div>
    )
  );
})
Search.displayName = "Search"

export { Search }