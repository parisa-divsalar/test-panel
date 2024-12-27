const select = {
    MuiSelect: {
        defaultProps: {
            variant: 'outlined' as const,
            size: 'medium' as const,
        },
        styleOverrides: {
            root: {
                '& .MuiSelect-select ': {
                    width: '100%',
                    minHeight: '42px !important',
                    height: 'auto',
                    paddingTop: '25px',
                },
                variants: [
                    {
                        props: { size: 'medium' },
                        style: {
                            height: '2.625rem',
                            fontSize: '0.75rem',
                            fontWeight: 400,
                        },
                    },
                ],
                '& .MuiFormLabel-root .MuiInputLabel-root .MuiInputLabel-formControl ': {
                    color: 'blue',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                },
            },
        },
    },
}

export default select
