import React from 'react'
import { InputAdornment, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
interface InputProps {
    label?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    icon?: any
    value?: any
    placeholder?: string
    select?: boolean
    options?: Array<{ label: string, value: string, img: any }>
    error?: boolean
}
export const Input: React.FC<InputProps> = ({
    onChange,
    label,
    className,
    icon,
    placeholder,
    value,
    select,
    options,
    error
}) => {
    return (
        <div className='flex flex-col '>
            <label className="font-medium text-[20px]">{label}</label>
            {select ? (
                <TextField
                    onChange={onChange}
                    className={`${className} `}
                    placeholder={placeholder}
                    InputProps={{
                        startAdornment: icon ? (
                            <InputAdornment position='start'>{icon}</InputAdornment>
                        ) : null
                    }}
                    select
                    value={value}
                >
                    {options?.map((option) => (
                        <MenuItem key={option.value} value={option.value} className=''>
                            {option.img}
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            ) : (
                <TextField
                    onChange={onChange}
                    className={className}
                    placeholder={placeholder}
                    InputProps={{
                        startAdornment: icon ? (
                            <InputAdornment position='start'>{icon}</InputAdornment>
                        ) : null
                    }}
                    value={value}
                    error = {error}
                    helperText={error ? 'Please enter number' : undefined}
                />
            )}
        </div>

    )
}