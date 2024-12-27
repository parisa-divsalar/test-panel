const autoComplete = {
    MuiAutocomplete: {
        styleOverrides: {
            inputRoot: {
                padding: '0',
            },
            input: {
                maxHeight: '42px',
                minHeight: '42px',
                padding: '0 8px !important',
            },
            endAdornment: {
                display: 'flex',
                gap: '0',
                right: '15px !important',
                '& .MuiAutocomplete-popupIndicator, & .MuiAutocomplete-clearIndicator': {
                    borderRadius: '4px',
                    width: '18px',
                    height: '18px',
                },
            },
            paper: {
                boxShadow:
                    '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12) !important',
            },
            option: {
                fontSize: '14px',
                padding: '10px',
            },
            root: {
                '& .MuiFormLabel-root': {
                    transform: 'translate(10px, 14px) !important',
                },
                '& .MuiInputLabel-shrink': {
                    transform: 'translate(11px, -11px) !important ',
                },
            },
        },
    },
}
export default autoComplete
