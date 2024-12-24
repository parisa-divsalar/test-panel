'use client'

import LinearProgress from '@mui/material/LinearProgress'
import { usePathname } from 'next/navigation'

const LoadingPage = () => {
    const pathname = usePathname()

    return (
        <div className='container mx-auto'>
            <div
                className={`fixed left-0 right-0 ${pathname !== '/' ? 'top-[60px] xl:top-[104px]' : ' xl:top-[104px]'}`}
            >
                <LinearProgress />
            </div>
        </div>
    )
}

export default LoadingPage
