/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Link from 'next/link'

type Properties = {
    status: string
    message: string
}

export default function Error({ status, message }: Properties) {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center overflow-y-scroll'>
            <p className='text-[10rem] text-yellow'>{status}</p>

            <p className='text-[3rem]'>{message}</p>

            <Link
                href={'/'}
                className='text-base text-yellow'
            >
                Go To Home Page
            </Link>
        </div>
    )
}
