'use client'

import { LoginPresenter } from './login.presenter'
import { CustomInput } from '@/app/(main)/_components/custom-input/custom-input'
import 'react-phone-input-2/lib/style.css'
import { Typography } from '@mui/material'

export const Login = () => {
    const { formik, isDisabled } = LoginPresenter()


    return (
        <div className={'flex flex-col w-full justify-center items-center'}>

            <div className={'flex justify-end md:pt-20  flex-col w-full md:w-[552px] z-10 '}>
                <div className={' rounded-2xl border bg-background px-4 py-10 md:p-10 flex flex-col gap-1'}>
                    <span className={'text-white text-2xl md:text-3xl pt-3 pb-5 md:pb-14'}>{'Log In  '}</span>
                    <span className={'text-white text-2xl md:text-3xl pt-3 pb-5 md:pb-1'}>{'Mobile number '}</span>
                    <CustomInput
                        id='name'
                        maxlength={11}
                        placeholder='Phone Number'
                        error={
                            (formik.values.mobileNumber && formik.errors.mobileNumber) ||
                            (!isDisabled ? formik.errors.mobileNumber : '')
                        }
                        value={formik.values.mobileNumber}
                        onChange={(event) => formik.setFieldValue('mobileNumber', event)}
                    />
                    <button
                        onClick={() => formik.handleSubmit()}
                        disabled={isDisabled}
                        className={`w-full mt-8  text-sm border rounded-md px-2 lg:px-4 h-[48px] md:h-[52px] flex items-center justify-center hover:opacity-75  min-w-[152px] flex-wrap bg-primary-500 text-white
                        ${isDisabled && 'bg-shine-100 text-gray-300'}
                        `}
                    >
                        <span className={'text-base md:text-lg'}>{'Next'}</span>
                    </button>

                </div>
            </div>
        </div>
    )
}
