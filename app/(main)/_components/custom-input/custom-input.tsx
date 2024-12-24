'use client'

import { CustomInputModel } from './custom-input.model'
import { CloseEyeIcon, FalseIcon, OpenEyeIcon, TrueIcon } from '@/app/(main)/_components/icon/icon'
import { useState } from 'react'

export const CustomInput = (props: CustomInputModel) => {
    const { label, value, onChange, id, defaultValue, placeholder, error, className, ltr, maxlength, require, type } =
        props
    const [typeShow, setTypeShow] = useState<boolean>(type === 'password')
    return (
        <div className={'relative w-full flex flex-col gap-2 ' + className || ''}>
            {label && (
                <label className='text-sm font-medium text-white'>
                    {label}
                    {require && <span className={'text-orange-500'}>*</span>}
                </label>
            )}

            <input
                type={(typeShow && 'password') || 'text'}
                id={id}
                name={id}
                value={value}
                maxLength={maxlength}
                defaultValue={defaultValue}
                onChange={(event) => onChange(event.target.value as string)}
                className={`h-[3.25rem] border-[1px] rounded-lg outline-none px-4 placeholder:!text-right bg-transparent border-gray-300 text-gray-500 ${
                    error && 'border-red-500'
                }`}
            />
            {type === 'password' ? (
                <button onClick={() => setTypeShow(!typeShow)}>
                    <span className={'absolute right-3 top-[45px]'}>
                        {typeShow ? <CloseEyeIcon /> : <OpenEyeIcon />}
                    </span>
                </button>
            ) : (
                <>
                    {error ? (
                        <span className={'absolute right-3 top-[44%]'}>
                            <FalseIcon />
                        </span>
                    ) : (
                        <span className={'absolute right-3 top-[60%]'}>{value?.length > 0 && <TrueIcon />}</span>
                    )}
                </>
            )}
            {error && <p className='text-sm text-red-500'>{error}</p>}
        </div>
    )
}
