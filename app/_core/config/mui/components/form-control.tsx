const formControl = {
    MuiFormControl: {
        styleOverrides: {
            root: {
                '& .MuiInputLabel-root': {
                    display: 'flex',
                    alignItems: 'center',
                    transform: 'translate(10px, 12px)', // Align label when not floating
                    transition: 'transform 0.3s, font-size 0.3s', // Smooth transition for floating
                },
                '& .MuiInputLabel-shrink': {
                    transform: 'translate(10px, -8px)', // Adjust when floating
                    fontSize: '11px', // Smaller size for floating state
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        legend: {
                            width: 'auto',
                        },
                    },
                },
            },
        },
    },
}
export default formControl
