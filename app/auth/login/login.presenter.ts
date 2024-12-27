'use client'

import { isLogin } from '@/app/_core/redux/auth/login'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'

export const LoginPresenter = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = yup.object({
        mobileNumber: yup
            .string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .matches(/^[09][0-9]{10}$/, 'Phone number must start with 09'),
    })

    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: { mobileNumber: '' } as { mobileNumber: string },
        onSubmit: (values) => {
            setIsLoading(true)
            router.push(`/dashboard`)
            if (formik.values.mobileNumber === '091211111111') {
                dispatch(
                    isLogin({
                        type: '1',
                        data: { token: '', uuid: '' },
                    }),
                )
            } else if (formik.values.mobileNumber === '091222222222') {
                dispatch(
                    isLogin({
                        type: '2',
                        data: { token: '', uuid: '' },
                    }),
                )
            } else if (formik.values.mobileNumber === '091233333333') {
                dispatch(
                    isLogin({
                        type: '3',
                        data: { token: '', uuid: '' },
                    }),
                )
            }
        },
    })

    const isDisabled = formik.values.mobileNumber === formik.initialValues.mobileNumber

    return { isLoading, formik, isDisabled }
}
