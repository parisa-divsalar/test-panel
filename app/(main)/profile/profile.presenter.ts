'use client'

import * as yup from 'yup'
import { useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/_core/redux/store'
import { useFormik } from 'formik'
import API_SERVICE_CLIENT from '@/app/_core/service/api-service-client'
import { addUserData } from '@/app/_core/redux/user/user'
import { useState } from 'react'
import { toast } from 'react-toastify'

let isMounted = false

export const ProfilePresenter = () => {
    const searchParams = useSearchParams()
    const userId = useSelector((state: RootState) => state.isLogin)
    const userData = useSelector((state: any) => state.userData.userData)

    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()

    const validationSchema = yup.object({
        full_name: yup.string().min(2, 'Name must be at least 2 characters long').max(50, 'This Password Not Valid'),
        // .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
        username: yup.string(),
        phone_number: yup.string(),
        email: yup.string().email('Please enter a valid email address'),
        telegram_username: yup.string(),
        bio: yup.string(),
    })

    const updateProfile = (values) => {
        isMounted = true
        setIsLoading(true)
        API_SERVICE_CLIENT.put(`/users/${userId.uuid}/`, values, {
            headers: { Authorization: `Token ${userId.token}` },
        })
            .then((response) => {
                dispatch(addUserData(response.data))
                setIsLoading(false)
                toast.success('Updated')
            })
            .catch((error) => {
                setIsLoading(false)
            })
    }

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            full_name: userData.full_name,
            username: userData.username,
            phone_number: userData.phone_number,
            email: userData.email,
            telegram_username: userData.telegram_username,
            bio: userData.bio,
        },
        onSubmit: (values) => {
            updateProfile(values)
        },
    })

    return {
        userId,
        formik,
        isLoading,
    }
}
