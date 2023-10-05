import { PropsWithChildren } from 'react'

export const FlowAreaWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="relative flex w-2/3 flex-col items-center justify-center">
            {children}
        </div>
    )
}
