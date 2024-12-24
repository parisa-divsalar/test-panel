'use client'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import API_SERVICE_CLIENT from '@/app/_core/service/api-service-client'
import { isLogin } from '@/app/_core/redux/auth/login'
import { useRouter } from 'next/navigation'
import { addUserData } from '@/app/_core/redux/user/user'

interface User {
    access_token: string
    first_name?: string
    last_name?: string
    username?: string
}

interface RootState {
    isLogin: {
        uuid: string
        token: string
    } | null
}

export const HeaderPresenter = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [user, setUser] = useState<User | null>(null)
    const dispatch = useDispatch()
    const router = useRouter()





    const logOut = () => {
        dispatch(isLogin({ data: { token: '', uuid: '' }, type: '' }))
        router.push('/')
    }

    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }

    return { isLoading, user, logOut, handleOpenModal, openModal, setOpenModal }
}
