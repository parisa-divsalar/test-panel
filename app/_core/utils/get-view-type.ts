'use client'

import { ViewType } from '@/app/_core/models/view-type'
import { useEffect, useState } from 'react'

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
}

export const GetViewType = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    useEffect(() => {
        const handleResize = () => setWindowDimensions(getWindowDimensions())
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const viewType: ViewType = windowDimensions.width < 1024 ? 'MOBILE' : 'WEB'

    return viewType
}
