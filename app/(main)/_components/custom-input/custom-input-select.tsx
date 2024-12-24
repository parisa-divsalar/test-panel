'use client'

import { CustomInputModel } from './custom-input.model'
import { CloseEyeIcon, FalseIcon, OpenEyeIcon, TrueIcon } from '@/app/(main)/_components/icon/icon'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'

interface CustomInputSelectProps {
    label: string
    style?: any
}

export const CustomInputSelect = ({ style, label }: CustomInputSelectProps) => {
    return (
        <FormControl fullWidth>
            <InputLabel
                id='demo-simple-select-label'
                style={{ fontFamily: 'unset', fontSize: '14px', color: '#F3F2F7', marginTop: 3, marginLeft: 8 }}
            >
                {label}
            </InputLabel>
            <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label={label}
				className={"!w-[100%] md:w-[30%]"}
                sx={{
                    border: '1.5px solid #565656',
                    boxShadow: '0px 0px 4px 0px #B9B9B940',
                    borderRadius: '4px',
                    '& .MuiInputBase-input': {
                        color: '#FCFCFC',
                        fontSize: '14px',
                        ml: 1,
                    },
                    '& .MuiInputBase-input::placeholder': {
                        fontSize: '14px',
                        color: '#B3B3B3',
                    },
                    '.MuiSvgIcon-root ': {
                        fill: '#F3F2F7 !important',
                    },
                    ...style,
                }}
            >
                <MenuItem value={10}>Iran</MenuItem>
                <MenuItem value={20}>Turkey</MenuItem>
                <MenuItem value={30}>Canada</MenuItem>
            </Select>
        </FormControl>
    )
}
