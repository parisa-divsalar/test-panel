'use client'

import createTheme from '@mui/material/styles/createTheme'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#006962',
        },
        secondary: {
            main: '#006962',
        },
    },

    typography: {
        fontFamily: ['farhang2'].join(','),
        button: {
            textTransform: 'none',
        },
    },

    components: {
        MuiInput: {
            styleOverrides: {
                root: {
                    width: '100%',

                    '&::before ': {
                        border: 'none',
                    },

                    '&::after': {
                        border: 'none',
                    },

                    '&:hover:not(.Mui-disabled, .Mui-error)::before': {
                        border: 'none',
                    },

                    '& input[type="number"]': {
                        MozAppearance: 'textfield',
                    },

                    '& input[type="number"]::-webkit-outer-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },

                    '& input[type="number"]::-webkit-inner-spin-button': {
                        WebkitAppearance: 'none',
                        margin: 0,
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: 'none !important',
                },
                input: {
                    fontSize: '1.2rem',
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: '3.75rem',

                    '& * ': {
                        direction: 'ltr',
                    },
                },
            },
        },

        MuiDialog: {
            styleOverrides: {
                paper: {
                    padding: '2rem',
                    maxWidth: '100%',
                    borderRadius: '0.5rem',
                },
            },
        },

        MuiSelect: {
            styleOverrides: {
                select: {
                    fontFamily: 'IRANSans !important',
                },
            },
        },

        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: 'IRANSans !important',
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                    maxHeight: '300px',
                },
            },
        },
    },
})
