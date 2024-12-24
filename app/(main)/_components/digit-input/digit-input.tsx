'use client'

import { DigitInputModel } from './digit-input.model'
import { CloseEyeIcon, FalseIcon, OpenEyeIcon, TrueIcon } from '@/app/(main)/_components/icon/icon'
import { useState } from 'react'

export const DigitInput = (props: DigitInputModel) => {
    const { label, value, onChange, id, defaultValue, placeholder, error, className, ltr, maxlength , require , type } = props
   const [typeShow , setTypeShow] = useState<boolean>(type === "password")
     return (
        <div className={'relative w-full flex flex-col gap-2 ' + className || ''}>
            <label className='text-sm font-medium text-white'>
              {label}
              {
                require &&
                <span className={"text-orange-500"}>*</span>
              }
            </label>

             <input
                max={6}
                type={typeShow && "password" || "text"}
                id={id}
                name={id}
                value={value}
                maxLength={6}
                defaultValue={defaultValue}
                onChange={(event) => onChange(event.target.value as string)}
                className={`caret-transparent h-[3.25rem] text-center tracking-[20px] border-[1px] rounded-lg outline-none px-4 placeholder:!text-right bg-transparent border-gray-300 text-gray-500 ${error && "border-red-500"}`}
            />

            {error && <p className='text-sm text-red-500'>{error}</p>}
        </div>
    )
}
