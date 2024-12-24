import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

interface CustomCircleProgressProps {
    value: number
}

export default function CustomCircleProgress({ value }) {
    return (
        <Box
            position='relative'
            display='inline-flex'
        >
            <CircularProgress
                variant='determinate'
                value={value}
                sx={{
                    color: '#3BC863',
                    zIndex: 10,
                    rotate: '90deg',
                }}
            />
            <CircularProgress
                variant='determinate'
                value={100}
                sx={{
                    color: '#FCFCFC',
                    position: 'absolute',
                    left: 0,
                    zIndex: 2,
                    rotate: '90deg',
                }}
            />
        </Box>
    )
}
