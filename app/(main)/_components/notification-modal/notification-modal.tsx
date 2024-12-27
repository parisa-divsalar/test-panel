'use client'

import { usePathname } from 'next/navigation'
import { CloseCircle, ProfileCircleIcon } from '../icon/icon'

export const NotificationModal = ({ setSelected }) => {
    const pathname = usePathname()

    return (
        <div
            onClick={(e) => e.target === e.currentTarget && setSelected(false)}
            className={'fixed top-0 right-0 backdrop-blur flex  w-full h-full z-40 bg-[#97979726]'}
        >
            <div className='w-[494px] h-full absolute right-0  rounded-s-2xl py-4 px-7 shadow-[0px_0px_4px_0px_#B9B9B940]'>
                <div className='flex justify-between items-center mb-5'>
                    <span className='text-2xl text-secondary-100'>Notifications</span>
                    <button onClick={() => setSelected(false)}>
                        <CloseCircle />
                    </button>
                </div>

                <div>
                    <span className='text-base text-secondary-700 '>Today</span>
                    <div className='flex justify-between items-center mt-3 mb-1'>
                        <span className='text-sm text-gray-500 flex gap-2 '>
                            <ProfileCircleIcon /> Login to account
                        </span>
                        <span className='text-xs text-secondary-300'>2/6/2024- 12:45 AM</span>
                    </div>
                    <span className='text-xs text-secondary-300 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </span>

                    <div className='flex justify-between items-center mt-3 mb-1'>
                        <span className='text-sm text-gray-500 flex gap-2 '>
                            <ProfileCircleIcon /> Set Phone Number
                        </span>
                        <span className='text-xs text-secondary-300'>2/6/2024- 12:35 AM</span>
                    </div>
                    <span className='text-xs text-secondary-300 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </span>
                </div>
                <div className='w-full h-[1px] bg-gray-700 my-3.5' />

                <div>
                    <span className='text-base text-secondary-700 '>Today</span>
                    <div className='flex justify-between items-center mt-3 mb-1'>
                        <span className='text-sm text-gray-500 flex gap-2 '>
                            <ProfileCircleIcon /> Login to account
                        </span>
                        <span className='text-xs text-secondary-300'>2/6/2024- 12:45 AM</span>
                    </div>
                    <span className='text-xs text-secondary-300 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </span>

                    <div className='flex justify-between items-center mt-3 mb-1'>
                        <span className='text-sm text-gray-500 flex gap-2 '>
                            <ProfileCircleIcon /> Set Phone Number
                        </span>
                        <span className='text-xs text-secondary-300'>2/6/2024- 12:35 AM</span>
                    </div>
                    <span className='text-xs text-secondary-300 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </span>
                </div>
            </div>
        </div>
    )
}
