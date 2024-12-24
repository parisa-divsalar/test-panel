'use client'

import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const API_SERVICE_CLIENT = axios.create({
    baseURL: 'https://api.markepto.com/v1/',
})

API_SERVICE_CLIENT.interceptors.request.use(
    (request) => {
        request.params = { ...request.params }
        return request
    },
    (error) => {
        return Promise.reject(error)
    },
)

API_SERVICE_CLIENT.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        catcherServerApi(error)
        return Promise.reject(error)
    },
)

export default API_SERVICE_CLIENT

const catcherServerApi = (error: unknown) => {
    if (error instanceof AxiosError) {
        const newCase = error?.response?.status || error.status
        const message = error?.message

        switch (newCase) {
            case 400:
                break
            case 401:
                // window.location.replace('/auth/login')
                break
            case 403:
                break
            case 404:
                break

            case 500:
                break
            case 502:
                break

            default: {
                toast.error(message)
            }
        }
    } else return 'خطای داخلی برنامه'
}
