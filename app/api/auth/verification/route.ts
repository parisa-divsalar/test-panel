import API_SERVICE_SERVER from '@/app/_core/service/api-service-server'
import CacheError from '@/app/_core/service/cache-error'
import { AxiosError } from 'axios'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    try {
        const input = await request.json()
        const response = await API_SERVICE_SERVER.post(`Account/VerificationCode`, input)
        const data = response.data

        const cookieStore = cookies()
        if (data?.data?.token) {
            cookieStore.set('accessToken', data?.data?.token)
            cookieStore.set('fullName', data?.data?.fullName)
            cookieStore.set('phoneNumber', data?.data?.phoneNumber)
        }
        return NextResponse.json({ data })
    } catch (error) {
        return CacheError(error as AxiosError)
    }
}
