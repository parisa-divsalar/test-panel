'use client'

import * as yup from 'yup'
import { useState , useEffect } from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { isLogin } from '@/app/_core/redux/auth/login'


export const LoginPresenter = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const validationSchema = yup.object({
        mobileNumber: yup.string()
            .required('شماره موبایل ')
            .test('', 'Please enter a valid mobileNumber .', (value) => {
                if (!isNaN(Number(value)) || value[0] === "+") {
                    return true; // شماره تلفن معتبر است
                }
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            })
            .required('ایمیل الزامی است'),
    });



    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: { mobileNumber: '' } as { mobileNumber: string },
        onSubmit: (values) => {
            setIsLoading(true)
            router.push(`/dashboard`)
            if(formik.values.mobileNumber === "091211111111") {
                dispatch(isLogin({ type: '1' }))
            } else if(formik.values.mobileNumber === "091222222222") {
                dispatch(isLogin({ type: '2' }))

            } else if(formik.values.mobileNumber === "091233333333") {
                dispatch(isLogin({ type: '3' }))
            }

        },
    })

    const isDisabled = formik.values.mobileNumber === formik.initialValues.mobileNumber

    return { isLoading, formik, isDisabled  }
}
