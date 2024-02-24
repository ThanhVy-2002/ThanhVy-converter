import React from 'react'
import { InputAdornment, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

interface InputProps {
    label?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    icon?: any
    type?: 'number' | 'text'
    value?: any
    placeholder?: string
    select?: boolean
    options?: Array<{ label: string, value: string }>
}
export const Input: React.FC<InputProps> = ({
    onChange,
    label,
    className,
    icon,
    placeholder,
    type,
    value,
    select,
    options
}) => {
    return (
        <div className='flex flex-col  items-center'>
            <label className="font-medium text-[20px]"> {label} </label>
            {select ? (
                <TextField
                    onChange={onChange}
                    type={type}
                    className={`${className} w-[300px]`}
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
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            ) : (
                <TextField
                    onChange={onChange}
                    type={type}
                    className={className}
                    placeholder={placeholder}
                    InputProps={{
                        startAdornment: icon ? (
                            <InputAdornment position='start'>{icon}</InputAdornment>
                        ) : null
                    }}
                    value={value}
                />
            )}
        </div>

    )
}