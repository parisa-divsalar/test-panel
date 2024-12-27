'use client'

import { useAppDispatch, useAppSelector } from '@/app/_core/redux/hooks'
import { isDarkMode } from '@/app/_core/redux/theme/theme'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HomePageModel } from './home.model'

export const Home = ({}: HomePageModel) => {
    const [currentImage, setCurrentImage] = useState(0)

    const images = ['/img/crypto-bg.png', '/img/auth-layout.png']
    const dispatch = useAppDispatch()
    const theme = useAppSelector((state) => state.isDarkMode.dark)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [theme])

    return (
        <Box
            component={'div'}
            sx={{ backgroundColor: 'white.50' }}
            className={'flex flex-col  h-full justify-start items-center '}
        >
            {' '}
            <Box
                component={'div'}
                className='flex justify-end w-[98%] gap-x-2  mt-4 '
            >
                {' '}
                <Button
                    variant='contained'
                    sx={{ backgroundColor: 'prime.200', color: 'grey.800' }}
                    href={'auth/login'}
                >
                    ورود
                </Button>{' '}
                <Button
                    onClick={() =>
                        dispatch(
                            isDarkMode({
                                dark: theme ? false : true,
                            }),
                        )
                    }
                    variant='contained'
                    sx={{ backgroundColor: 'prime.200', color: 'grey.800' }}
                >
                    تغییر تم
                </Button>{' '}
            </Box>
            <Box
                component={'div'}
                className='flex h-fit justify-center w-full'
            >
                <Typography
                    component={'h4'}
                    variant='h4'
                    sx={{ color: 'white.900' }}
                >
                    Your Title
                </Typography>
                <Image
                    className='scale-75 mt-3'
                    alt=''
                    fill
                    src={'/img/crypto-bg.png'}
                />
            </Box>
        </Box>
    )
}
