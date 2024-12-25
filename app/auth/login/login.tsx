'use client'

import { CustomInput } from '@/app/(main)/_components/custom-input/custom-input'
import { Box, Button, Typography } from '@mui/material'
import 'react-phone-input-2/lib/style.css'
import { LoginPresenter } from './login.presenter'

export const Login = () => {
    const { formik, isDisabled } = LoginPresenter()

    return (
        <Box
            component={'div'}
            className={'flex justify-end md:pt-20 mx-auto  flex-col w-full md:w-[552px] z-10 '}
        >
            <Box
                sx={{ backgroundColor: 'white.50' }}
                component={'div'}
                className={' rounded-2xl border  px-4 py-10 md:p-10 flex flex-col gap-1'}
            >
                <Typography
                    sx={{ color: 'white.900' }}
                    component={'h5'}
                    variant='h4'
                    className={'  md:text-3xl pt-3 pb-5 md:pb-14'}
                >
                    {'Log In  '}
                </Typography>
                <Typography
                    variant='h6'
                    sx={{ color: 'white.900' }}
                    component={'span'}
                    className={' text-2xl md:text-3xl pt-3 pb-5 md:pb-1'}
                >
                    {'Mobile number '}
                </Typography>
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
                <Button
                    className='my-4'
                    onClick={() => formik.handleSubmit()}
                    disabled={isDisabled}
                    variant='contained'
                >
                    Next
                </Button>
            </Box>
        </Box>
    )
}
