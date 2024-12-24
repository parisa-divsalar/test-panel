import CacheError from '@/app/_core/service/cache-error'
import { cookies } from 'next/headers'
import { AxiosError } from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const cookieStore = cookies()
        cookieStore.delete('member_id')
        return NextResponse.json({})
    } catch (error) {
        return CacheError(error as AxiosError)
    }
}
