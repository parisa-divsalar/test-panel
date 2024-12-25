import { HeaderPresenter } from '@/app/(main)/_components/header/header.presenter'
import { Cube, LogOutIcon, RingIcon, SunIcon } from '@/app/(main)/_components/icon/icon'
import { useAppSelector } from '@/app/_core/redux/hooks'
import { isDarkMode } from '@/app/_core/redux/theme/theme'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import CustomSwitchButton from '../custom-switch-button/custom-switch-button'
import { NotificationModal } from '../notification-modal/notification-modal'
interface User {
    access_token: string
    first_name?: string
    last_name?: string
    username?: string
    email?: string
}

const Header = () => {
    const {
        user,
        logOut,
        handleOpenModal,
        openModal,
        setOpenModal,
    }: {
        isLoading: boolean
        user: User | null
        logOut: any
        handleOpenModal: any
        openModal: boolean
        setOpenModal: any
    } = HeaderPresenter()
    const theme = useAppSelector((state) => state.isDarkMode.dark)

    const [selected, setSelected] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [logOutModal, setLogOutModal] = useState(false)
    const { i18n } = useTranslation()
    const { t } = useTranslation('sidebar')
    const modalRef: any = useRef(null)
    const switchLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        document.documentElement.dir = lng === 'fa' ? 'rtl' : 'ltr'
    }
    const dispatch = useDispatch()

    useEffect(() => {
        document.documentElement.dir = i18n.language === 'fa' ? 'rtl' : 'ltr'
    }, [i18n.language])

    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current?.contains(event.target)) {
                setOpenModal(false)
            }
        }

        if (openModal) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [openModal, setOpenModal])

    return (
        <div className='hidden md:flex  pt-4 mb-3  justify-end w-full'>
            {/* <Search /> */}
            <div className='flex items-center gap-3 px-10'>
                <SunIcon
                    aria-label='SunIcon'
                    color={theme ? '#fff' : '#3E3E3E'}
                />
                <button
                    className={'px-1'}
                    onClick={() => setSelected(true)}
                >
                    <RingIcon
                        aria-label='Notifications'
                        color={theme ? '#fff' : '#3E3E3E'}
                    />
                </button>

                {selected && <NotificationModal setSelected={setSelected} />}
                <button
                    className={'flex items-center gap-3'}
                    onClick={(event) => {
                        handleOpenModal(event)
                    }}
                >
                    <div className='h-[31px] w-[31px] relative'>
                        <Image
                            fill
                            alt='User Avatar'
                            src='/img/avatar.svg'
                            className='object-cover'
                        />
                    </div>
                </button>
                <div className='text-sm text-white flex items-center relative'>
                    {openModal && (
                        <div
                            ref={modalRef}
                            className={`absolute z-[1000] top-4 p-3  gap-3.5 right-0 rounded items-between justify-between w-[284px] mt-3  shadow-[0px_0px_4px_0px_#B9B9B940] flex-col`}
                        >
                            <div className='flex gap-3 mt-1'>
                                <Image
                                    width={32}
                                    height={32}
                                    alt='User Avatar'
                                    src='/img/avatar.svg'
                                    className='object-cover'
                                />
                                <div className='flex justify-between items-center w-full '>
                                    <div className='block'>
                                        <span className='text-sm block w-[170px] overflow-hidden'>
                                            {user
                                                ? user.first_name
                                                    ? `Hi, ${user.first_name} ${user.last_name}`
                                                    : user.username || 'Guest'
                                                : 'Guest'}
                                        </span>
                                        <span className='text-xs text-secondary-300'>{user && user.email}</span>
                                    </div>
                                    <Cube color='#42BBFF' />
                                </div>
                            </div>
                            <div className={'flex items-center pt-4 gap-2'}>
                                <button
                                    onClick={() => switchLanguage('fa')}
                                    className={`p-1 text-sm rounded ${
                                        i18n.language === 'fa' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                    }`}
                                >
                                    فارسی
                                </button>
                                <button
                                    onClick={() => switchLanguage('en')}
                                    className={`p-1 text-sm rounded ${
                                        i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                    }`}
                                >
                                    English
                                </button>
                            </div>
                            <div className={'flex items-center justify-between py-4'}>
                                <span className={'text-sm'}>{t('DarkTheme')}</span>
                                <CustomSwitchButton
                                    onChange={(event) => {
                                        setDarkMode(event.target.checked)
                                        dispatch(isDarkMode({ dark: event.target.checked }))
                                    }}
                                    isChecked={darkMode}
                                />
                            </div>
                            <button
                                onClick={() => setLogOutModal(true)}
                                className={'flex items-center gap-2'}
                            >
                                <span className={'text-sm '}>{t('LogOut')}</span>
                            </button>
                            {logOutModal && (
                                <Box
                                    component={'div'}
                                    onClick={(e) => e.target === e.currentTarget && setLogOutModal(false)}
                                    className={
                                        'fixed top-0 right-0 backdrop-blur flex justify-center items-center w-full h-full z-40'
                                    }
                                >
                                    <Box
                                        sx={{ backgroundColor: 'white.50' }}
                                        component={'div'}
                                        className='rounded-[20px]  w-[434px] py-7 px-[53px] flex justify-center flex-col items-center'
                                    >
                                        <LogOutIcon color='#FF3F64' />

                                        <Typography className='text-xl text-red-500 pt-2 pb-1'>Log Out</Typography>
                                        <Typography
                                            color={'grey.600'}
                                            className='text-lg  w-[240px]'
                                        >
                                            Are you sure you want to log out?
                                        </Typography>

                                        <Box
                                            component={'div'}
                                            className='flex gap-x-4  mt-6 w-full'
                                        >
                                            <Button
                                                className='w-full'
                                                variant='contained'
                                                onClick={() => setLogOutModal(false)}
                                            >
                                                Cancel
                                            </Button>

                                            <Button
                                                className='w-full'
                                                variant='contained'
                                                color='error'
                                                onClick={() => {
                                                    logOut()
                                                    setLogOutModal(false)
                                                }}
                                            >
                                                Yes
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
