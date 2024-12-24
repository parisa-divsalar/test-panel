'use client'

import { Sidebar } from '@/app/(main)/_components/sidebar/sidebar'
import Header from '@/app/(main)/_components/header/header'
import {  useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'


export default function MainLayout({ children }: { children: React.ReactNode }) {
    const path = usePathname() || ''
    const theme = useSelector((state => state.isDarkMode.dark))
    return (
        <>
                <div className={`flex h-[100vh] w-screen ${theme ? "dark" : ""}`}>
                    <div className='flex-shrink-0 bg-background border'>
                        {
                            path !== "/" &&  <Sidebar />
                        }

                    </div>
                    <div className='flex-grow overflow-hidden bg-background'>
                        {
                            path !== "/" && <Header />
                        }
                        {children}
                    </div>
                </div>
        </>
    )
}
