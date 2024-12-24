'use client'

import React, { useState } from 'react'

export default function CustomSwitch({ value, setSelected }) {
    return (
        <div className='relative flex items-center w-48 h-10  bg-[#3A3A3A] rounded-full shadow-[0px_10px_15px_0px_#183B5633] z-30'>
            <div
                className={`absolute w-[90px] h-8 bg-white rounded-full transition-all duration-300 ml-1.5 ${
                    value === 'monthly' ? 'translate-x-0' : 'translate-x-full'
                }`}
            ></div>
            <button
                className={`text-sm md:text-base z-10 w-[98px] text-center py-2 text-base font-semibold  ${
                    value === 'monthly' ? 'color-#1D1D1D' : 'text-gray-800'
                }`}
                onClick={() => setSelected('monthly')}
            >
                Monthly
            </button>
            <button
                className={`text-sm md:text-base z-10 w-[90px] text-center py-2 text-base font-semibold  ${
                    value === 'yearly' ? 'color-#1D1D1D' : 'text-gray-800'
                }`}
                onClick={() => setSelected('yearly')}
            >
                Yearly
            </button>
        </div>
    )
}
