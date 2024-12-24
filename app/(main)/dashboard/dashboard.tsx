'use client'

import { HomePageModel } from './dashboard.model'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

export const Dashboard = ({}: HomePageModel) => {
    const [currentImage, setCurrentImage] = useState(0)

    const images = ['/img/crypto-bg.png', '/img/auth-layout.png']
    const loginType = useSelector((state) => state.loginType.type)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className={'overflow-y-auto'}>
            <div
                className={' justify-start items-start relative md:px-2 overflow-y-auto h-[calc(100vh-10px)] md:h-[calc(100vh-59px)] pb-[32px]'}
            >
                <div
                    className='w-full relative h-[226px] md:max-h-[279px] md:min-h-[600px] mt-1 md:rounded-lg relative bg-white py-4 md:py-[32px] px-4 md:px-[41px] flex relative'
                    style={{}}
                >
                    <div className='absolute inset-0 z-0 transition-all duration-1000 md:rounded-lg'>
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 md:rounded-lg ${
                                    index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                                style={{
                                    backgroundImage: `url('${image}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                        ))}
                    </div>

                </div>

                <div className={"flex justify-center"}>

                    <span className={"font-semibold text-3xl py-5 text-white"}>
                        {
                            loginType === "1" && " دکتر محمدجواد فرج پور خوش آمدید"
                        }
                    </span>

                    <span className={"font-semibold text-3xl py-5 text-white"}>
                        {
                            loginType === "2" && " بیمار امین محمدی پور خوش آمدید"
                        }
                    </span>

                    <span className={"font-semibold text-3xl py-5 text-white"}>
                        {
                            loginType === "3" && "ادمین قاسم قاسم پور اصل خوش آمدید"
                        }
                    </span>

                </div>


            </div>
        </section>
    )
}
