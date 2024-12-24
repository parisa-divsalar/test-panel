'use client'

import React, { useState } from 'react'

export default function CustomLinear({ currentStep }) {
    const steps = [
        { step: 1, text: 'Transaction Details' },
        { step: 2, text: 'Payment' },
        { step: 3, text: 'Completed' },
    ]

    return (
        <div className='w-[720px] flex flex-col items-center'>
            <div className='relative w-full flex items-center'>
                {steps.map((item, index) => (
                    <div
                        key={item.step}
                        className='flex items-center flex-1'
                    >
                        <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center ${
                                currentStep >= item.step ? 'bg-primary-300' : 'bg-[#777777]'
                            }`}
                        ></div>
                        {index < steps.length - 1 && (
                            <div
                                className={`flex-1 h-[5px] ${
                                    currentStep > item.step ? 'bg-[#1160F0]' : 'bg-gray-700'
                                }`}
                            ></div>
                        )}
                    </div>
                ))}
            </div>
            <div className='w-[488px] flex justify-between mt-2 -ml-[220px]'>
                {steps.map((item, index) => (
                    <span
                        key={item.step}
                        className={`text-xs text-[#FCFCFC] ${item.text === 'Payment' && 'mr-12'}`}
                    >
                        {item.text}
                    </span>
                ))}
            </div>
        </div>
    )
}
