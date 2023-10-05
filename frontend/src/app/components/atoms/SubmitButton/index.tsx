import { TSubmitButtonProps } from './types'
import React from 'react'

export const SubmitButton = ({ onClick }: TSubmitButtonProps) => {
    return (
        <button onClick={onClick} className=" bg-matrixGreen p-4">
            Submit Flux
        </button>
    )
}
