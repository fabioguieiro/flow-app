import React from 'react';
import { Handle, Position } from 'reactflow';


export const CustomStartNode = () => {
  return (
    <>
        <div className='bg-mrPink py-2 px-8 border-2 border-black rounded-lg tracking-widest text-black'>
        <Handle
            type="source"
            position={Position.Bottom}
            id="a"
            
            isConnectable={true}
        />
      <div>START</div>
        </div>
    </>

  );
}

