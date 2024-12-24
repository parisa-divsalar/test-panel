'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GalleryAddIcon, ProfileRoundedIcon } from '../_components/icon/icon'
import { CustomInput } from '../_components/custom-input/custom-input'
import { CircularProgress, TextField } from '@mui/material'
import { CustomInputMUI } from '../_components/custom-input/custom-input-mui'
import { ProfilePresenter } from './profile.presenter'
import { useSelector } from 'react-redux'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import API_SERVICE_CLIENT from '@/app/_core/service/api-service-client'

export default function ProfilePage() {
    const { formik, isLoading, userId } = ProfilePresenter()
    const userData = useSelector((state: any) => state.userData.userData)

    const [imageBase64, setImageBase64] = useState<string | null>(null) // ذخیره رشته Base64
    const [uploading, setUploading] = useState<boolean>(false) // وضعیت آپلود

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0] // گرفتن فایل انتخاب‌شده
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                if (reader.result) {
                    const base64String = (reader.result as string).split(',')[1] // حذف قسمت اضافی
                    setImageBase64(base64String) // ذخیره Base64
                    sendImageToApi(base64String) // ارسال به API
                }
            }
            reader.readAsDataURL(file) // تبدیل فایل به Base64
        }
    }

    const sendImageToApi = async (base64Image: string): Promise<void> => {
        console.log(base64Image)

        setUploading(true) // شروع آپلود
        API_SERVICE_CLIENT.put(
            `/users/${userId.uuid}/`,
            { profile_image_base64: base64Image },
            {
                headers: { Authorization: `Token ${userId.token}` },
            },
        )
            .then((response) => {
                console.log(response)

                // dispatch(addUserData(response.data))
                // setIsLoading(false)
                // toast.success('Updated')
                setUploading(false)
            })
            .catch((error) => {
                // setIsLoading(false)
            })
    }

    return (
        <div className={'overflow-y-auto'}>
            <div
                style={{ height: 'calc(100vh - 59px) ' }}
                className={'bg-gray-900 justify-start items-start relative px-5 md:px-10 py-8  overflow-y-auto'}
            >
                <div className={'flex items-center'}>
                    <span className={'mr-1.5 flex items-center'}>
                        <ProfileRoundedIcon />
                    </span>
                    <div className={'text-white flex items-center mt-[3px]'}>Profile</div>
                </div>

				<div className='flex justify-center mt-4 md:mt-14'>
					<div className='w-[687px] md:bg-background md:px-11 md:py-9'>
						<div className='flex gap-6 items-center justify-center md:justify-start'>
							<span className='text-lg text-white hidden md:flex'>Avatar</span>
                            <div className='bg-gray-900 rounded-full flex flex-col items-center justify-center w-[110px] h-[110px] shadow-[0px_3px_12px_-6px_#565656,0px_1px_0px_0px_#565656,0px_0px_0px_1px_#565656]'>
                                {/* <input
                                    type='file'
                                    accept='image/*'
                                    onChange={handleFileChange}
                                    disabled={uploading} // غیر فعال شدن هنگام آپلود
                                /> */}

                                <GalleryAddIcon color='#C6C6C6' />
                                <span className='text-[10px] text-secondary-700 mt-2'>Upload your photo</span>
                                {/* <Image
                                    src='/img/female-avatar.jpg'
                                    width={110}
                                    height={110}
                                    alt='avatar'
                                    className='rounded-full'
                                /> */}
                            </div>
                        </div>

                        <div className='mt-[26px] flex flex-col gap-[26px]'>
                            <CustomInputMUI
                                id='full_name'
                                maxlength={50}
                                label='Full name'
                                placeholder='Please enter your full name'
                                value={formik.values.full_name}
                                defaultValue={userData.full_name}
                                onChange={(event) => formik.setFieldValue('full_name', event.target.value)}
                            />

                            <CustomInputMUI
                                id='username'
                                maxlength={50}
                                label='Username'
                                placeholder='Please enter your Username'
                                value={formik.values.username}
                                defaultValue={userData.username}
                                onChange={(event) =>
                                    !userData.username && formik.setFieldValue('username', event.target.value)
                                }
                            />

                            <div className='my-mui-tel-component'>
                                <div className='h-[3.25rem] border-[1px] flex items-center rounded-lg outline-none placeholder:!text-right bg-transparent border-gray-300 text-gray-500 relative border-secondary-200'>
                                    <PhoneInput
                                        disabled={userData.phone_number}
                                        placeholder='Please enter your phone number'
                                        value={formik.values.phone_number}
                                        country='IR'
                                        inputProps={{
                                            autoFocus: true,
                                        }}
                                        onChange={(event) =>
                                            !userData.phone_number && formik.setFieldValue('phone_number', event)
                                        }
                                    />
                                </div>
                            </div>

                            <CustomInputMUI
                                id='email'
                                maxlength={50}
                                label='Email'
                                placeholder='Please enter your Email'
                                value={formik.values.email}
                                defaultValue={userData.email}
                                onChange={(event) =>
                                    !userData.email && formik.setFieldValue('email', event.target.value)
                                }
                            />

                            <CustomInputMUI
                                id='telegram_username'
                                maxlength={50}
                                label='Telegram ID'
                                placeholder='Please enter your Email'
                                value={formik.values.telegram_username}
                                defaultValue={userData.telegram_username}
                                onChange={(event) =>
                                    !userData.telegram_username &&
                                    formik.setFieldValue('telegram_username', event.target.value)
                                }
                            />

                            <CustomInputMUI
                                id='reffered'
                                maxlength={50}
                                label='Reffered By'
                                placeholder='Please Enter your Referred ID'
                                value={userData.referred_by}
                                defaultValue={userData.referred_by}
                                onChange={(event) => {}}
                            />

                            <CustomInputMUI
                                id='bio'
                                maxlength={50}
                                label='Bio'
                                placeholder='Please enter your Bio'
                                value={formik.values.bio}
                                defaultValue={userData.bio}
                                onChange={(event) => formik.setFieldValue('bio', event.target.value)}
                                multiline
                            />
                            <div className='flex justify-end gap-2'>
                                {/* <button
                                    // onClick={() => formik.handleSubmit()}
                                    className={`w-[140px] h-[52px] mt-2 rounded text-lg text-white bg-secondary-400`}
                                >
                                    <span className={'text-lg'}>Cancel</span>
                                </button> */}
                                <button
                                    type='button' // مشخص کردن نوع دکمه
                                    onClick={() => formik.handleSubmit()}
                                    className={`w-[103px] md:w-[140px] h-[40px] md:h-[52px] mt-2 rounded text-lg text-white bg-primary-500`}
                                >
                                    {isLoading ? (
                                        <CircularProgress
                                            size='30px'
                                            sx={{ mt: 1, color: 'white' }}
                                        />
                                    ) : (
                                        <span className={'text-base md:text-lg'}>Save</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
