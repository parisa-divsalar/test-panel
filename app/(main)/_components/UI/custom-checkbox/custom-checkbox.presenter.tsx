'use client'

import * as yup from 'yup'
import API_SERVICE_CLIENT from '@/app/_core/service/api-service-client'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { useGoogleLogin } from '@react-oauth/google'
import { toast } from 'react-toastify'

export const CheckBoxPresenter = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const validationSchema = yup.object({
     form: yup.boolean(),
  });

  const formik = useFormik({
    validationSchema: validationSchema,

    initialValues: {  form: [] } as {  form: object },


    onSubmit: (values) => {

    },
  })


  return { isLoading, formik }
}
