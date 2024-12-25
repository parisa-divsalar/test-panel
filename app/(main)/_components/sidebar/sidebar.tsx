'use client'

import { useAppSelector } from '@/app/_core/redux/hooks'
import { Box, IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { AccountIcon, DashboardIcon, MenuIcon, SettingIcon } from '../icon/icon'

export const Sidebar = () => {
    const { t } = useTranslation('sidebar')
    const theme = useAppSelector((state) => state.isDarkMode.dark)

    const path = usePathname() || ''

    const showSidebar = true
    const handleToggleSidebar = () => {}

    return (
        <Box
            component={'div'}
            className={'md:w-[275px] overflow-hidden hidden md:flex '}
        >
            <Box
                sx={{ borderBottom: '1px solid', borderBottomColor: 'grey.900' }}
                className={' justify-left flex   py-3  items-center px-6  absolute top-0  w-[275px] z-10 h-[60px]'}
            >
                <Box>
                    <IconButton
                        sx={{ color: 'grey.900' }}
                        className='border flex justify-center'
                    >
                        <MenuIcon color={theme ? '#fff' : '#3E3E3E'} />
                    </IconButton>
                </Box>
            </Box>
            <Box
                className={`${showSidebar ? 'w-[275px]' : 'w-[75px] overflow-hidden '}  ${
                    !showSidebar ? 'mt-[73px]' : 'mt-[69px]'
                } `}
            >
                <Box
                    component={'div'}
                    className={`px-6 py-4 overflow-hidden relative `}
                >
                    <Box
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
                            <Typography
                                component={'span'}
                                sx={{ color: 'grey.900' }}
                                className={'pr-3 flex items-center'}
                            >
                                <DashboardIcon color={path === '/' ? '#42BBFF' : theme ? '#fff' : '#3E3E3E'} />
                            </Typography>
                            {showSidebar && (
                                <Box
                                    color={'grey.900'}
                                    component={'div'}
                                    className={`flex items-center mt-[3px] `}
                                >
                                    {t('Dashboard')}
                                </Box>
                            )}
                        </Link>
                    </Box>
                </Box>

                <Box
                    component={'div'}
                    className={'px-6 pb-4  '}
                >
                    <Link href={`/profile`}>
                        <Box
                            className={`flex items-center py-3 ${!showSidebar && 'mt-[9px]'}`}
                            onClick={() => {
                                if (!showSidebar) {
                                }
                            }}
                        >
                            <Typography
                                component={'span'}
                                sx={{ color: 'grey.900' }}
                                className={'pr-3 flex items-center'}
                            >
                                <AccountIcon
                                    color={path.startsWith('/profile') ? '#42BBFF' : theme ? '#fff' : '#3E3E3E'}
                                />
                            </Typography>

                            {showSidebar && (
                                <Box
                                    color={'grey.900'}
                                    component={'div'}
                                    className={' flex items-center mt-[3px] '}
                                >
                                    {t('Profile')}
                                </Box>
                            )}
                        </Box>
                    </Link>
                    <Box
                        className={`border-b border-dashed border-gray-800 h-[1px] opacity-40 pt-2 ${
                            !showSidebar && 'mt-[5px] -ml-1'
                        } `}
                    />
                </Box>

                <Box
                    component={'div'}
                    className={'px-6 pb-4'}
                >
                    <Link href={`/setting`}>
                        <Box
                            className={`flex items-center py-3 ${!showSidebar && 'mt-1'}`}
                            onClick={() => {}}
                        >
                            <Typography
                                component={'span'}
                                sx={{ color: 'grey.900' }}
                                className={'pr-3 flex items-center'}
                            >
                                <SettingIcon
                                    color={path.startsWith('/setting') ? '#42BBFF' : theme ? '#fff' : '#3E3E3E'}
                                />
                            </Typography>

                            {showSidebar && (
                                <Box
                                    color={'grey.900'}
                                    component={'div'}
                                    className={' flex items-center mt-[3px] '}
                                >
                                    {t('Setting')}
                                </Box>
                            )}
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
