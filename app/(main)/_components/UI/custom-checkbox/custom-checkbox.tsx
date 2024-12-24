"use client"

import React, { useEffect, useState } from 'react'
import { LockIcon, TickIcon } from '@/app/(main)/_components/icon/icon'
import Image from 'next/image'

// تعریف نوع داده برای Coin

interface FilterStrategyProps {
    formatted_currency?: string[]
    time_interval?: string[]
    side?: string[]
    market?: string[]
}
interface Coin {
    id: string // یا number، بسته به نیاز شما
    label: string
}

// تعریف نوع پروپ‌ها

interface CustomCheckBoxProps {
    label: string
    id: string
    onChange: ({ id, label }: { id: string; label: string }) => void
    disable?: boolean
    lock?: boolean
    coinList: Coin[] // آرایه‌ای از اشیاء Coin
    icon?: boolean
    index?: number
    filterStrategy?: FilterStrategyProps[]
    selected?: string
}

const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
    label,
    id,
    lock,
    onChange,
    disable = false,
    coinList,
    icon,
    filterStrategy,
    selected,
}) => {
    // @ts-ignore

    const isChecked = coinList.findIndex((item) => item.id === id) !== -1

    const isOn = filterStrategy?.[selected || '']?.includes(label)

	const [disableItem , setDisableItem] = useState(disable)

	const handleDisable = () => {
	  if(disable) {
		  setDisableItem(!disableItem)
	  }
	}

    return (
        <div
            className={
			`relative flex items-center !bg-transparent ${
				disableItem  ? 'opacity-40' : ''
            }
             ${
				 lock ? 'pointer-events-none opacity-40' : ''
			}
            justify-between w-full h-full `
		}
        >
            <label className='relative flex items-center cursor-pointer w-full h-full py-1'>
                <div className='flex items-center'>
                    <input
                        type='checkbox'
                        checked={
                            filterStrategy && Object.keys(filterStrategy).length === 0 && !label
                                ? true
                                : isOn || isChecked
                        }
                        onChange={() => {
							handleDisable()
                            onChange({ id: id, label: label })
                        }}
                        className={`appearance-none w-[20px] h-[20px] border-2 border-secondary-700 rounded-md cursor-pointer transition duration-300
                ${
                    filterStrategy && Object.keys(filterStrategy).length === 0 && !label
                        ? 'bg-primary-500 border-white'
                        : isOn || isChecked
                        ? 'bg-primary-500 border-white'
                        : 'bg-transparent'
                }`}
                        style={{
                            position: 'relative',
                        }}
                    />
                    {disableItem && (
                        <span className='absolute left-[4px] top-[12px] text-black text-xl pointer-events-none'>
                            <TickIcon color={'#ffff'} />
                        </span>
                    )}
                    {filterStrategy && Object.keys(filterStrategy).length === 0 && !label ? (
                        <span className='absolute left-[4px] top-[13px] text-black text-xl pointer-events-none'>
                            <TickIcon color={'#ffff'} />
                        </span>
                    ) : isOn || isChecked ? (
                        <span className='absolute left-[4px] top-[13px] text-black text-xl pointer-events-none'>
                            <TickIcon color={'#ffff'} />
                        </span>
                    ) : null}
                </div>
                {icon && (
                    <span className='text-sm text-gray-100 pl-2'>
                        <div className='h-[16px] w-[16px] relative'>
                            <Image
                                fill
                                alt='Auth-Layout'
                                src={`/img/icon/${label}.png`}
                            />
                        </div>
                    </span>
                )}
                <span className='text-sm text-gray-100 pl-2 pt-1'>{label}</span>
                {lock && (
                    <span className={'absolute -right-6'}>
                        <LockIcon />
                    </span>
                )}
            </label>
        </div>
    )
}

export default CustomCheckBox
