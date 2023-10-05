import React from 'react'

type TSuccessIconProps = {
    width?: number
    height?: number
    color: string
}

export const SuccessIcon = ({ width, height, color }: TSuccessIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 800}
            height={height || 800}
            viewBox="0 0 24 24"
            fill={color || '#000000'}
            stroke={color || '#000000'}
        >
            <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
            <path d="M15.29,8.29,10,13.59,7.71,11.29a1,1,0,0,0-1.41,1.41l3,3a1,1,0,0,0,1.41,0l6-6a1,1,0,0,0-1.41-1.41Z" />
        </svg>
    )
}
