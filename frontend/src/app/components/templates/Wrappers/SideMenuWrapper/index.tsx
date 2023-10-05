import { PropsWithChildren } from 'react'
import React from 'react'

export const SideMenuWrapper = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex w-1/3 flex-col items-center justify-center">
            {children}
        </div>
    )
}
