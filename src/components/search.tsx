import React from 'react'
import { Input } from './ui/input'
import { SearchIcon } from 'lucide-react'

export const Search = () => {
  return (
    <div className="relative w-full max-w-xs">
      <Input
        className="bg-primary-foreground h-[60px] rounded-full border-none pl-14 text-base focus:border-none focus:!ring-0"
        placeholder="Search"
      />
      <SearchIcon
        className="text-muted-foreground absolute top-1/2 left-6 -translate-y-1/2"
        strokeWidth={1.2}
      />
      <span className="sr-only">Search</span>
    </div>
  )
}
