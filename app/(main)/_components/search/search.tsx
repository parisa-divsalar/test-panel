import React from 'react'
import { SearchIcon } from '@/app/(main)/_components/icon/icon'

const Search = () => {
  return (
    <div className={"relative flex items-center h-full w-[95%] px-3 rounded-md   shadow-[0px_3px_12px_-6px_#565656,0px_1px_0px_0px_#565656,0px_0px_0px_1px_#565656]"}>
      <span className={"absolute top-2 left-4"}>
        <SearchIcon/>
      </span>
      <input className={"bg-gray-900 py-1 pl-8 pr-1 text-sm rounded-lg text-gray-800 w-full placeholder-secondary-500 outline-none"} placeholder={"Search"}/>
    </div>
  )
}

export default Search
