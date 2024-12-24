'use client'

import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/_core/redux/store'

export const SettingPresenter = () => {
    const searchParams = useSearchParams()
    const userId = useSelector((state: RootState) => state.isLogin)

    return {
        userId,
    }
}
