'use client'

import React from 'react'
import {
    AccountIcon,
    DashboardIcon,
    MenuIcon,
    SettingIcon,
} from '../icon/icon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next';

export const Sidebar = () => {

    const { t } = useTranslation('sidebar');

    const path = usePathname() || ''

    const showSidebar = true
    const handleToggleSidebar = () => {


    }

    return (
        <div
           className={"md:w-[275px] overflow-hidden hidden md:flex bg-background" }
        >
            <div
                className={
                    ' justify-left flex  border-b border-gray-900 py-3 flex items-center px-6  absolute top-0 bg-background w-[285px] z-10 h-[60px]'
                }
            >
                <div>
                    <button
                        className='border flex justify-center'
                        onClick={handleToggleSidebar}
                    >
                        <MenuIcon />
                    </button>
                </div>

            </div>
            <div
                className={`${showSidebar ? 'w-[275px]' : 'w-[75px] overflow-hidden '}  ${
                    !showSidebar ? 'mt-[73px]' : 'mt-[69px]'
                } `}
            >
                <div className={`px-6 py-4 overflow-hidden relative `}>

                    <div
                        className={`flex items-center py-3 mt-[20px]`}
                        onClick={() => {
                            if (!showSidebar) {

                            }
                        }}
                    >
                        <Link
                            href={`/`}
                            className='flex'
                        >
                            <span className={'pr-3 flex items-center'}>
                                <DashboardIcon color={path === '/' ? '#42BBFF' : '#fff'} />
                            </span>
                            {showSidebar && (
                                <div
                                    className={`flex items-center mt-[3px] text-white`}
                                >
                                    {t('Dashboard')}

                                </div>
                            )}
                        </Link>
                    </div>

                </div>

                <div className={'px-6 pb-4  '}>
                    <Link href={`/profile`}>
                        <div
                            className={`flex items-center py-3 ${!showSidebar && 'mt-[9px]'}`}
                            onClick={() => {
                                if (!showSidebar) {

                                }
                            }}
                        >
                            <span className={'pr-3 flex items-center'}>
                                <AccountIcon color={path.startsWith('/profile') ? '#42BBFF' : '#fff'} />
                            </span>

                            {showSidebar && (
                                <div
                                    className={'text-gray-400 flex items-center mt-[3px] text-white'}
                                >
                                    {t('Profile')}

                                </div>
                            )}
                        </div>
                    </Link>
                    <div
                        className={`border-b border-dashed border-gray-800 h-[1px] opacity-40 pt-2 ${
                            !showSidebar && 'mt-[5px] -ml-1'
                        } `}
                    />
                </div>

                <div className={'px-6 pb-4'}>

                    <Link href={`/setting`}>
                        <div
                            className={`flex items-center py-3 ${!showSidebar && 'mt-1'}`}
                            onClick={() => {

                            }}
                        >
                            <span className={'pr-3 flex items-center'}>
                                <SettingIcon color={path.startsWith('/setting') ? '#42BBFF' : '#fff'} />
                            </span>

                            {showSidebar && (
                                <div
                                    className={'text-gray-400 flex items-center mt-[3px] text-white'}
                                >
                                    {t('Setting')}

                                </div>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
