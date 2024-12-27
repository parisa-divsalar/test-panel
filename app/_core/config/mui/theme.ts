'use client'

import createTheme from '@mui/material/styles/createTheme'
import ColorPallet from './color'
import autoComplete from './components/auto-complete'
import badge from './components/badge'
import button from './components/button'
import card from './components/card'
import chip from './components/chip'
import dialog from './components/dialog'
import formControl from './components/form-control'
import menuItem from './components/menu-item'
import outLinedInput from './components/outlined-input'
import select from './components/select'
import slider from './components/slider'
import table from './components/table'
import textField from './components/text-field'
import Typography from './components/typography'

export const theme = (themeMode: string) =>
    createTheme({
        typography: Typography.typography,
        palette: {
            grey: {
                ...ColorPallet(themeMode).Colors.gray,
            },
            white: {
                ...ColorPallet(themeMode).Colors.white,
            },
            primary: {
                main: '#0079FF',
            },
            second: {
                ...ColorPallet(themeMode).Colors.secondary,
            },

            prime: {
                ...ColorPallet(themeMode).Colors.primary,
            },

            warning: {
                ...ColorPallet(themeMode).Colors.warning,
            },

            error: {
                ...ColorPallet(themeMode).Colors.alarm,
            },
            success: {
                ...ColorPallet(themeMode).Colors.success,
            },
        },

        components: {
            ...Typography,
            ...formControl,
            ...outLinedInput,
            ...table,
            ...slider,
            ...card,
            ...chip,
            ...button,
            ...select,
            ...textField,
            ...menuItem,
            ...autoComplete,
            ...dialog,
            ...badge,
        },
    })
