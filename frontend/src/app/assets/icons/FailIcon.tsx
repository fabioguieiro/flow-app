type TFailIconProps = {
    width?: number
    height?: number
    color: string
}

export const FailIcon = ({ width, height, color }: TFailIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 800}
            height={height || 800}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color || '#000000'}
        >
            <path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                strokeWidth="2"
            />
            <path
                d="M9 9L15 15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 9L9 15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
