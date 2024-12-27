const button = {
    MuiButton: {
        styleOverrides: {
            // Name of the slot
            root: {
                variants: [
                    //sizes
                    {
                        props: { size: 'small' },
                        style: {
                            padding: '0 0.625rem',
                            height: '2rem',
                            fontSize: '0.75rem',
                            fontWeight: 400,
                        },
                    },
                    {
                        props: { size: 'medium' },
                        style: ({ theme }) => ({
                            padding: '0 1rem',
                            height: '2.25rem',
                            fontSize: '0.875rem',
                            fontWeight: 400,
                            color: `${theme.palette.white[900]} !important`,
                            backgroundColor: `${theme.palette.warning[200]} !important`,
                        }),
                    },
                    {
                        props: { size: 'large' },
                        style: {
                            padding: '0 1.375rem',
                            height: '2.625rem',
                            fontSize: '1rem',
                            fontWeight: 400,
                        },
                    },
                    //colors primary
                    {
                        props: { variant: 'outlined', color: 'primary' },
                        style: ({ theme }) => ({
                            '&:hover': {
                                backgroundColor: theme.palette.primary[50],
                            },
                        }),
                    },
                    {
                        props: { variant: 'text', color: 'primary' },
                        style: ({ theme }) => ({
                            '&:hover': {
                                backgroundColor: theme.palette.primary[50],
                            },
                        }),
                    },

                    //color secondary
                    {
                        props: { variant: 'outlined', color: 'secondary' },
                        style: ({ theme }) => ({
                            '&:hover': {
                                backgroundColor: theme.palette.secondary[50],
                            },
                        }),
                    },
                    {
                        props: { variant: 'text', color: 'secondary' },
                        style: ({ theme }) => ({
                            '&:hover': {
                                backgroundColor: theme.palette.secondary[50],
                            },
                        }),
                    },
                    //color Error
                    {
                        props: { variant: 'outlined', color: 'error' },
                        style: ({ theme }) => ({
                            '&:hover': {
                                backgroundColor: theme.palette.error[50],
                            },
                        }),
                    },
                    {
                        props: { variant: 'text', color: 'error' },
                        style: ({ theme }) => ({
                            '&:hover': {
                                backgroundColor: theme.palette.error[50],
                            },
                        }),
                    },
                    //color Warning
                    {
                        props: { variant: 'outlined', color: 'warning' },
                        style: ({ theme }) => ({
                            '&:hover': {
                                backgroundColor: theme.palette.warning[50],
                            },
                        }),
                    },
                    {
                        props: { variant: 'text', color: 'warning' },
                        style: ({ theme }) => ({
                            '&:hover': {
                                backgroundColor: theme.palette.warning[50],
                            },
                        }),
                    },
                    //color Success
                    {
                        props: { variant: 'outlined', color: 'success' },
                        style: ({ theme }) => ({
                            '&:hover': {
                                backgroundColor: theme.palette.success[50],
                            },
                        }),
                    },
                    {
                        props: { variant: 'text', color: 'success' },
                        style: ({ theme }) => ({
                            '&:hover': {
                                backgroundColor: theme.palette.success[50],
                            },
                        }),
                    },
                ],
            },
            startIcon: {},
            endIcon: {},
        },
        MuiButtonBase: {
            defaultProps: {
                variant: 'contained',
                // The props to change the default for.
                // disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
    },
}
export default button
