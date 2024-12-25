'use client'

import { CustomInputMUI } from '../_components/custom-input/custom-input-mui'
import { CustomInputSelect } from '../_components/custom-input/custom-input-select'
import CustomSwitchButton from '../_components/custom-switch-button/custom-switch-button'
import { SettingIcon, SunIcon } from '../_components/icon/icon'

export default function SettingPage() {
    return (
        <div className={'overflow-y-auto'}>
            <div
                style={{ height: 'calc(100vh - 59px) ' }}
                className={'bg-gray-900 justify-start items-start relative px-5 md:px-10 py-8  overflow-y-auto'}
            >
                <div className={'flex items-center'}>
                    <span className={'mr-1.5 flex items-center'}>
                        <SettingIcon />
                    </span>
                    <div className={'text-white flex items-center mt-[3px]'}>Setting</div>
                </div>
                <div className='mt-6'>
                    <span className='text-base text-secondary-200'>General Details</span>
                    <div className=' rounded mt-3 px-4 md:px-[30px] py-4 mb-4'>
                        <span className='text-xs md:text-base text-secondary-100 '>Appearance</span>
                        <div className='mt-2 md:mt-5 '>
                            <span className='text-xs md:text-sm text-secondary-100 '>Dark mode</span>
                            <div className='mt-1.5 flex justify-between items-center'>
                                <span className='text-[10px] md:text-base text-[#A3A3A3] '>
                                    By disabling light mode, you can enable dark mode
                                </span>
                                <CustomSwitchButton
                                    isChecked={true}
                                    icon={
                                        <SunIcon
                                            color='white'
                                            style={{ width: '16px' }}
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <span className='text-base text-secondary-200 '>Time zone</span>
                    <div className=' rounded mt-3 px-4 md:px-[30px] py-[26px] mb-4'>
                        <CustomInputSelect label='country' />
                    </div>

                    <span className='text-base text-secondary-200'>Notification</span>
                    <div className=' rounded mt-3 px-4 md:px-[30px] py-4 mb-4'>
                        <span className='text-sm text-secondary-100'>Enable Desktop Notification</span>
                        <div className='mt-1 flex justify-between items-center mb-5'>
                            <span className='text-xs text-[#A3A3A3] '>Receive desktop notifications</span>
                            <CustomSwitchButton isChecked={false} />
                        </div>

                        <span className='text-sm text-secondary-100'>Enable Unread Notification Badge</span>
                        <div className='mt-1 flex justify-between items-center mb-5'>
                            <span className='text-xs text-[#A3A3A3] '>
                                Shows a red badge on the notification icon when you have unread message
                            </span>
                            <CustomSwitchButton isChecked={true} />
                        </div>

                        <span className='text-sm text-secondary-100'>New Strategy Notification</span>
                        <div className='mt-1 flex justify-between items-center'>
                            <span className='text-xs text-[#A3A3A3] '>New Alert Notification</span>
                            <CustomSwitchButton isChecked={false} />
                        </div>
                    </div>

                    <span className='text-base text-secondary-200 '>Security</span>
                    <div className=' rounded mt-3 md:px-[30px] py-[26px] mb-4 flex flex-col items-center md:flex-row gap-[30px]'>
                        <CustomInputMUI
                            id='name'
                            maxlength={50}
                            label='Old Password'
                            type='password'
                            value={''}
                            onChange={(event) => {}}
                            style={{ width: '353px' }}
                        />
                        <CustomInputMUI
                            id='name'
                            maxlength={50}
                            label='New Password'
                            type='password'
                            value={''}
                            onChange={(event) => {}}
                            style={{ width: '353px' }}
                        />

                        <CustomInputMUI
                            id='name'
                            maxlength={50}
                            label='New Password'
                            type='password'
                            value={''}
                            onChange={(event) => {}}
                            style={{ width: '353px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
