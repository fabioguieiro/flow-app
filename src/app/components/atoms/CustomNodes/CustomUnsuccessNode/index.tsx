import React from 'react'
import { Handle, Position } from 'reactflow'

export const CustomUnsuccessNode = () => {
    return (
        <>
            <div className="rounded-lg border-2 border-black bg-mrPink px-8 py-2 tracking-widest text-black">
                <Handle
                    type="target"
                    position={Position.Left}
                    onConnect={(params) =>
                        console.log('handle onConnect', params)
                    }
                    isConnectable={true}
                    id="a"
                />
                <div>decision = FALSE</div>
            </div>
        </>
    )
}
