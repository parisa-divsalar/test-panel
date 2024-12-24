'use client'

import { CustomInputModel } from './custom-input.model'
import { CloseEyeIcon, FalseIcon, OpenEyeIcon, TrueIcon } from '@/app/(main)/_components/icon/icon'
import { InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'

interface CustomInputMUIProps {
    id: string
    ltr?: boolean
    require?: boolean
    label: string
    value: string
    type?: string
    error?: string
    maxlength?: number
    className?: string
    placeholder?: string
    defaultValue?: string
    multiline?: boolean
    onChange: any
    style?: React.CSSProperties
    disabled?: boolean
}

export const CustomInputMUI = (props: CustomInputMUIProps) => {
    const {
        label,
        value,
        onChange,
        id,
        defaultValue,
        placeholder,
        error,
        className,
        ltr,
        maxlength,
        require,
        type,
        multiline,
        style,
        disabled,
    } = props
    const [typeShow, setTypeShow] = useState<boolean>(type === 'password')

    return (
        <TextField
            name='bio'
            id={id}
            label={label}
            value={value}
            onChange={onChange}
            multiline={multiline}
            type={(typeShow && 'password') || 'text'}
            rows={4}
            variant='outlined'
            disabled={disabled}
            sx={{
                ...style,
                border: '1.5px solid #565656',
                boxShadow: '0px 0px 4px 0px #B9B9B940',
                borderRadius: '4px',
                height: multiline ? '' : '52px',
                '& .MuiInputBase-input': {
                    color: '#FCFCFC',
                    fontSize: '14px',
                },
                '& .MuiInputBase-input::placeholder': {
                    fontSize: '14px',
                    color: '#B3B3B3',
                },
                '& .MuiInputAdornment-root::after': {
                    content: 'none',
                    display: 'none',
                },
            }}
            InputLabelProps={{
                style: {
                    color: '#F3F2F7',
                    fontSize: '14px',
                    fontFamily: 'unset',
                },
            }}
            InputProps={{
                style: {
                    fontFamily: 'unset',
                },
                placeholder: placeholder,
                startAdornment:
                    label === 'Phone number' ? (
                        <InputAdornment position='start'>
                            <span className='text-secondary-300 text-sm'>+98 | </span>
                        </InputAdornment>
                    ) : null,
                endAdornment: type === 'password' && (
                    <InputAdornment position='start'>
                        <button onClick={() => setTypeShow(!typeShow)}>
                            <span className={'absolute right-3 top-3.5'}>
                                {typeShow ? <CloseEyeIcon /> : <OpenEyeIcon />}
                            </span>
                        </button>
                    </InputAdornment>
                ),
            }}
        />
    )
}
