import React, { useState } from 'react'
import { SearchIcon } from '@/app/(main)/_components/icon/icon'

const FilterSearch = ({onChange , placeholder}) => {
  const [value , setValue] = useState()
  const handleChange = (e) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }
  return (
    <div className={"relative w-full"}>
      <span className={"absolute top-3 right-0"}>
        <SearchIcon/>
      </span>
      <input value={value} onChange={(e) => handleChange(e)} className={"bg-transparent py-3  text-sm  text-secondary-500 w-full placeholder-secondary-500 outline-none"} placeholder={placeholder}/>
    </div>
  )
}

export default FilterSearch
