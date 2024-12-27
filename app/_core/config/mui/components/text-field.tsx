const textField = {
    MuiTextField: {
        styleOverrides: {
            root: {
                width: '100%',
                minWidth: '4rem',
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
                '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: '1px',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    outline: 'none',
                },
                '&::placeholder': {
                    fontStyle: 'italic',
                },
                '& label': {
                    fontSize: '0.8125rem',
                },
                '& fieldset': {
                    fontSize: '0.8125rem',
                },
            },
        },
    },
}

export default textField
