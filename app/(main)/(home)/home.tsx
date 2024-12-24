'use client'

import { HomePageModel } from './home.model'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export const Home = ({}: HomePageModel) => {
    const [currentImage, setCurrentImage] = useState(0)

    const images = ['/img/crypto-bg.png', '/img/auth-layout.png']

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
       <div className={"flex justify-center items-center mt-10"}>
           <Link className={`w-full mt-8  text-sm border rounded-md px-2 lg:px-4 h-[48px] md:h-[52px] flex items-center justify-center hover:opacity-75  w-[152px] flex-wrap bg-primary-500 text-white`} href={"auth/login"}>
               ورود
           </Link>
       </div>
    )
}
