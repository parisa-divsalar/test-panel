import API_SERVICE_SERVER from '@/app/_core/service/api-service-server'
import CacheError from '@/app/_core/service/cache-error'
import { AxiosError } from 'axios'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const cookieStore = cookies()
        const input = await request.json()
        const response = await API_SERVICE_SERVER.post(`add_member.php`, input)
        const data = await response.data

        cookieStore.set('member_id', data.member_id)
        return NextResponse.json({ data })
    } catch (error) {
        return CacheError(error as AxiosError)
    }
}
