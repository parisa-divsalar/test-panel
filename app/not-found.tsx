'use client'

import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center overflow-y-scroll'>
            <p className='text-[10rem] text-yellow'> 404</p>

            <p className='text-[3rem]'>Page Not Found</p>

            <Link
                href={'/'}
                className='text-base text-yellow'
            >
                Go To Home Page
            </Link>
        </div>
    )
}
