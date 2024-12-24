'use client'

import React from 'react'

interface CustomSwitchButtonProps {
    isChecked: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    icon?: React.ReactNode
}

export default function CustomSwitchButton({ isChecked, onChange, icon }: CustomSwitchButtonProps) {
    return (
        <div className='flex items-center space-x-4'>
            <label
                htmlFor='toggle'
                className='relative inline-block w-12 h-6'
            >
                <input
                    type='checkbox'
                    id='toggle'
                    checked={isChecked}
                    onChange={onChange}
                    className='sr-only'
                />
                <span
                    className={`block w-full h-full rounded-full ${
                        isChecked ? 'bg-[#0e508e]' : 'bg-secondary-500'
                    } transition-colors duration-300`}
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        transition: 'background-color 0.4s',
                        height: 16,
                        width: '40px',
                    }}
                >
                    <span
                        className={`block w-6 h-6 ${
                            isChecked ? 'bg-[#2196F3]' : 'bg-white'
                        }  rounded-full shadow-md items-center flex justify-center`}
                        style={{
                            position: 'absolute',
                            bottom: '-4px',
                            left: isChecked ? '16px' : '0px',
                            transition: 'transform 0.4s',
                            boxShadow: '0px 1.16px 3.47px 0px #0000001F',
                        }}
                    >
                        {icon && icon}
                    </span>
                </span>
            </label>
        </div>
    )
}
