const chip = {
    MuiChip: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: 4,
                '&.MuiChip-outlinedPrimary': {
                    border: `1px solid ${theme.palette.primary[500]}`,
                },
                '&.MuiChip-outlinedSecondary': {
                    border: `1px solid ${theme.palette.secondary[500]}`,
                },
                '&.MuiChip-outlinedError': {
                    border: `1px solid ${theme.palette.error[500]}`,
                },
                '&.MuiChip-outlinedWarning': {
                    border: `1px solid ${theme.palette.warning[500]}`,
                },
                '&.MuiChip-outlinedSuccess': {
                    border: `1px solid ${theme.palette.success[500]}`,
                },
            }),
            sizeSmall: {
                height: '1.5rem',
                padding: '0 0.4rem',
                fontSize: '0.75rem',
                fontWeight: 400,
            },
            sizeMedium: {
                height: '2rem',
                padding: '0 .8rem',
                fontSize: '0.8125rem',
                fontWeight: 400,
            },
            sizeLarge: {
                height: '2.5rem',
                padding: '0 1.2rem',
                fontSize: '0.875rem',
                fontWeight: 400,
            },
            label: {
                padding: '0 4px',
            },
        },
    },
}

export default chip
