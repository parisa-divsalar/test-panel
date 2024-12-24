'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedTabFilter } from '@/app/_core/redux/strategy/filter'
import API_SERVICE_CLIENT from '@/app/_core/service/api-service-client'
import { useSearchParams } from 'next/navigation'
import { subcategory } from '@/app/_core/redux/strategy/sucategory'
import { newStrategy } from '@/app/_core/redux/strategy/new-strategy'

// Define the shape of your Redux state
interface RootState {
    selectedTabCategory: {
        value: number // Adjust this type according to your actual state
    }
    isLogin: {
        uuid: string
        token: string
    }
}
interface ListDataProps {
    currency: string
    trigger_price: string | number
    time_interval: string
    side: string
    created: string
    currency_icons: {
        base_currency_icon: string
        quote_currency_icon: string
    }
    formatted_currency: string
    created_human_readable: string
    currency_price: number
}

interface CategoryStatisticsProps {
    category: string
    count: number
}

interface MarketDataProps {
    data: {
        name: string
        symbol: string
        icon: string
        price: string
        price_change: string
        price_change_class: string
    }[]
}
interface PaginationProps {
    hasNextPage: boolean
    currentPage: number
}

let isMounted = false

export const HomePresenter = () => {
    const searchParams = useSearchParams()

    const userId = useSelector((state: RootState) => state.isLogin)

    const divRef = useRef<HTMLDivElement | null>(null)

    const [pagination, setPagination] = useState<PaginationProps>({ currentPage: 1, hasNextPage: false })
    const [listLoading, setListLoading] = useState<boolean>(false)
    const [listPaginationLoading, setListPaginationLoading] = useState<boolean>(false)
    const [listData, setListData] = useState<ListDataProps[] | null>()
    const [listSelectedType, setListSelectedType] = useState<string>('All')
    const [categoryStatistics, setCategoryStatistics] = useState<CategoryStatisticsProps[] | null>()

    const [marketLoading, setMarketLoading] = useState<boolean>()
    const [marketData, setMarketData] = useState<MarketDataProps | null>()

    const [counts, setCounts] = useState<any>()

    useEffect(() => {
        const count = categoryStatistics?.map((item) => item.count)
        setCounts(count)
    }, [listData])

    useEffect(() => {
        // @ts-ignore
        handleListData()
    }, [listSelectedType])

    useEffect(() => {
        handleMarketData()
    }, [])

    const handleListData = () => {
        isMounted = true
        setListLoading(true)
        if (userId?.uuid && userId?.token) {
            API_SERVICE_CLIENT.get(`/signals-by-tier?page=1&page_size=50&tier=${listSelectedType}`, {
                headers: { Authorization: `Token ${userId.token}` },
            })
                .then((response) => {
                    setPagination(response.data.pagination)
                    setListData(response.data.signals)
                    setCategoryStatistics(response.data.category_statistics)
                    setListLoading(false)
                })
                .catch((error) => {
                    setListLoading(false)
                    console.error('Error fetching data:', error)
                    setListData(null)
                })
        } else {
            setListData(null)
        }
    }

    const handleMarketData = () => {
        isMounted = true
        setMarketLoading(true)
        if (userId?.uuid && userId?.token) {
            API_SERVICE_CLIENT.get(`/market-data/`, {
                headers: { Authorization: `Token ${userId.token}` },
            })
                .then((response) => {
                    setMarketData(response.data)
                    setMarketLoading(false)
                })
                .catch((error) => {
                    setMarketLoading(false)
                    console.error('Error fetching data:', error)
                    setMarketData(null)
                })
        } else {
            setMarketData(null)
        }
    }

    const handleScroll = () => {
        const element = divRef.current
        if (element) {
            const isAtBottom = element.scrollHeight - element.scrollTop === element.clientHeight
            if (isAtBottom) {
                if (pagination?.hasNextPage === true) {
                    setListPaginationLoading(true)
                    API_SERVICE_CLIENT.get(
                        `/signals-by-tier?page=${pagination?.currentPage + 1}&page_size=50&tier=${listSelectedType}`,
                        {
                            headers: { Authorization: `Token ${userId.token}` },
                        },
                    )
                        .then((response) => {
                            setPagination(response.data.pagination)
                            setListData((prev: any) => [...prev, ...response.data.signals])
                            setCategoryStatistics(response.data.category_statistics)
                            setListPaginationLoading(false)
                        })
                        .catch((error) => {
                            console.error('Error fetching data:', error)
                            setListData(null)
                            setListPaginationLoading(false)
                        })
                }
            }
        }
    }

    return {
        listData,
        listSelectedType,
        setListSelectedType,
        listLoading,
        marketData,
        marketLoading,
        counts,
        categoryStatistics,
        divRef,
        handleScroll,
        listPaginationLoading,
    }
}
