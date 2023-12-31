import { ButtonProps } from './types'

export const ActionButton = ({ label, type, handleClick }: ButtonProps) => {
    return (
        <button
            type={type}
            className="my-7 bg-mechanicOrange p-4 font-inter"
            onClick={handleClick}
        >
            {label}
        </button>
    )
}
