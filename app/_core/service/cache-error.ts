import { AxiosError } from 'axios'
import { NextResponse } from 'next/server'

const CacheError = (error: AxiosError) => {
    if (error?.response?.status === 401) {
    }

    return NextResponse.json({ error: error?.response?.data }, { status: error?.response?.status })
}

export default CacheError
