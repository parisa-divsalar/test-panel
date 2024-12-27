import CustomCheckbox from '@/app/(main)/_components/UI/custom-checkbox/custom-checkbox'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Option {
    id: number // assuming id is a number
    name?: string
    value?: string // value is optional
    category?: string // value is optional
}

interface Coin {
    id: string // یا number
    label: string
}

interface CustomSelectProps {
    options: Option[]
    onchange: (data: { name?: string; id?: number; title?: string }) => void
    name: string
    label: string
    disable?: boolean
    defaultValue?: string
    placeHolder?: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    onchange,
    name,
    label,
    disable,
    defaultValue,
    placeHolder,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState<Option | null>(null)
    const [selectedListItem, setSelectedItem] = useState<Option[]>([])
    const selectRef = useRef<HTMLDivElement | null>(null)
    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (defaultValue) {
            const defaultOption = options.find((option) => option.value === defaultValue)
            setSelectedOption(defaultOption || null)
        }
    }, [defaultValue, options])

    const handleOptionClick = (option: Option) => {
        console.log(option)
        // setIsOpen(false);
    }

    const handleSelectList = (selectedItem) => {
        setSelectedItem((prevList) => {
            const newList = [...prevList]
            const find = newList.findIndex((item) => +item.id === +selectedItem?.id)
            if (find !== -1) {
                newList.splice(find, 1)
            } else {
                newList.push({ id: +selectedItem.id, name: selectedItem.label })
            }
            return newList
        })
        onchange({ id: +selectedItem.id, name: selectedItem.label, title: '' })
        setSelectedOption({ id: +selectedItem.id })
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // تبدیل selectedListItem به آرایه‌ای از Coin
    const selectedCoins: any[] = selectedListItem.map((item) => ({
        id: item.id.toString(),
        label: item.name,
    }))

    const filterOption = (options: Option[]): { name: string; id: number; category: string }[] => {
        const list: { name: string; id: number; category: string }[] = []
        options?.forEach((item) => {
            list.push({
                name: item.name || '', // Ensure 'name' is defined as a string
                id: item.id,
                category: item.category || item.value || '', // Ensure category is defined
            })
        })
        return list
    }

    const params = {
        slidesPerGroup: 1,
        breakpoints: {
            1500: { slidesPerView: 3.1 },
            1024: { slidesPerView: 2.1 },
            768: { slidesPerView: 1 },
            640: { slidesPerView: 10 },
            360: { slidesPerView: 10 },
            320: { slidesPerView: 10 },
        },
    }

    return (
        <div
            className={`relative w-full ${disable ? 'opacity-50 pointer-events-none' : ''}`}
            ref={selectRef}
        >
            <div
                className={`flex gap-2 items-center justify-start h-[48px] overflow-hidden px-2.5 pb-2.5 pt-4 w-full text-sm outline outline-1 outline-gray-300 text-white   shadow-[0px_3px_12px_-6px_#565656,0px_1px_0px_0px_#565656,0px_0px_0px_1px_#565656] rounded-lg appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-main peer cursor-pointer`}
                onClick={toggleDropdown}
            >
                <div className={'w-full'}>
                    <Swiper
                        {...params}
                        loop={false}
                        className='mySwiper'
                        spaceBetween={8}
                    >
                        {selectedListItem?.map((item, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                    className={'!flex justify-start'}
                                >
                                    <span
                                        key={index}
                                        className={
                                            'text-sm bg-secondary-400 p-1 rounded-3xl px-2 w-full justify-center flex'
                                        }
                                    >
                                        {item.name?.toLocaleLowerCase()}
                                    </span>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
            {isOpen && (
                <div className='absolute z-20 w-full rounded-lg shadow-lg mt-1 max-h-[200px] overflow-auto'>
                    {filterOption(options).map((option, index) => (
                        <div
                            key={option.id}
                            className={`px-4 cursor-pointer ${selectedOption?.id === option.id ? 'bg-gray-700' : ''}`}
                            // onClick={() => handleOptionClick(option)}
                        >
                            <div className='flex justify-left text-white text-xs items-center'>
                                <CustomCheckbox
                                    coinList={selectedCoins} // ارسال selectedCoins به عنوان آرایه‌ای از Coin
                                    id={option.id.toString()} // تبدیل ID به رشته
                                    label={option.name || ''} // Use category or name as label
                                    index={index}
                                    onChange={(e) => handleSelectList(e)} // انجام تنظیمات لازم
                                />
                                {/*{option.name}*/}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <label
                htmlFor={`id-${name}`}
                className={`absolute ${
                    selectedOption ? 'h-[20px] text-main !text-[10px] -translate-y-4 top-2' : 'top-1/2 -translate-y-1/2'
                } peer-focus:text-main text-sm text-gray-500 dark:text-gray-400 duration-300 transform z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 start-1 cursor-pointer`}
                onClick={toggleDropdown}
            >
                {label}
            </label>
        </div>
    )
}

export default CustomSelect
