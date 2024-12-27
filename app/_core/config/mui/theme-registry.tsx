'use client'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { useServerInsertedHTML } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { theme } from './theme'

export default function ThemeRegistry(props: any) {
    const { options, children } = props
    const themeMode = useAppSelector((s) => s.isDarkMode.dark)
    console.log(themeMode)
    const [{ cache, flush }] = useState(() => {
        const cache = createCache(options)
        cache.compat = true
        const prevInsert = cache.insert
        let inserted: string[] = []
        cache.insert = (...args) => {
            const serialized = args[1]
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name)
            }
            return prevInsert(...args)
        }
        const flush = () => {
            const prevInserted = inserted
            inserted = []
            return prevInserted
        }
        return { cache, flush }
    })

    useServerInsertedHTML(() => {
        const names = flush()
        if (names.length === 0) {
            return null
        }
        let styles = ''
        for (const name of names) {
            styles += cache.inserted[name]
        }
        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(' ')}`}
                dangerouslySetInnerHTML={{
                    __html: styles,
                }}
            />
        )
    })

    useEffect(() => {
        console.log(theme, 'sadksadjiasdijadsjidasjasjiidsajiads')
    }, [themeMode])

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={themeMode ? theme('dark') : theme('light')}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    )
}
