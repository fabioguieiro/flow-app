import React from 'react'
import { Handle, Position } from 'reactflow'

export const CustomStartNode = () => {
    return (
        <>
            <div className="rounded-lg border-2 border-black bg-babyBlue px-8 py-2 tracking-widest text-black">
                <Handle
                    type="source"
                    position={Position.Bottom}
                    id="a"
                    isConnectable={true}
                />
                <div>START</div>
            </div>
        </>
    )
}
