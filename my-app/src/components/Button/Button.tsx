import React from 'react'

interface ButtonProps {
    label?: string
    onClick?: () => void
    className?: string
    icon?: any
}
export const Button: React.FC<ButtonProps> = ({
    onClick,
    label,
    className,
    icon
}) => {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {label}
            <span className='flex items-center ml-2'>{icon}</span>
        </button>
    )
}