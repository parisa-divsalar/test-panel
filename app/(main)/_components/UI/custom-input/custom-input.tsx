import React, { useEffect, useState } from 'react'

const CustomInput = ({ type = 'text', name, label, className, defaultValue, disable, onchange, maxLength }: any) => {
    const [value, setValue] = useState(null)
    const handleChange = (e: any) => {
        setValue(e.target.value)
        onchange({ name: name, value: e.target.value })
    }
    useEffect(() => {
        setValue(defaultValue || '')
    }, [defaultValue])

    return (
        <div
            key={'name'}
            className={`relative w-full ${className} ${disable && 'pointer-events-none opacity-40'}`}
        >
            <input
                type={type}
                id={`id-${name}`}
                className={`block px-2.5 pb-2.5 pt-4 w-full text-xs md:text-sm text-gray-500/50 bg-transparent border border-1 !border-gray-500/50 text-white rounded py-2 px-5 flex items-center appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-main peer`}
                placeholder={''}
                value={value || ''}
                onChange={(e) => handleChange(e)}
                maxLength={maxLength}
            />
            <label
                htmlFor={`id-${name}`}
                className={`absolute ${
                    value ? ' text-main !text-[10px]' : ''
                } max-w-[95%]  peer-focus:text-main text-xs md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4  top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-focus:dark:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:text-[10px] peer-focus:-translate-y-4   start-1`}
            >
                {label}
            </label>
        </div>
    )
}

export default CustomInput
