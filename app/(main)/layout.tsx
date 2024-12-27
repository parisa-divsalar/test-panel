'use client'

import Header from '@/app/(main)/_components/header/header'
import { Sidebar } from '@/app/(main)/_components/sidebar/sidebar'
import { Box } from '@mui/material'
import { usePathname } from 'next/navigation'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const path = usePathname() || ''

    return (
        <>
            <Box
                sx={{ backgroundColor: 'white.50' }}
                component={'div'}
                className={`flex h-svh w-screen`}
            >
                <Box
                    sx={{ backgroundColor: 'white.50', border: '1px solid ', borderColor: 'grey.500' }}
                    component={'div'}
                    className='flex-shrink-0 '
                >
                    {path !== '/' && <Sidebar />}
                </Box>
                <Box
                    sx={{ backgroundColor: 'white.50' }}
                    component={'div'}
                    className='flex-grow overflow-hidden '
                >
                    {path !== '/' && <Header />}
                    {children}
                </Box>
            </Box>
        </>
    )
}
