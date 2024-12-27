import { Components, CssVarsTheme, Theme } from '@mui/material'

const badge: Components<Omit<Theme, 'components' | 'palette'> & CssVarsTheme> = {
    MuiBadge: {
        styleOverrides: {
            badge: {
                borderRadius: 4,
            },
        },
    },
}

export default badge
