import React from 'react';
import { Handle, Position } from 'reactflow';


export const CustomUnsuccessNode = () => {
  return (
    <>
        <div className='bg-mrPink py-2 px-8 border-2 border-black rounded-lg tracking-widest text-black'>
          <Handle
              type="target"
              position={Position.Left}
              onConnect={(params) => console.log('handle onConnect', params)}
              isConnectable={true}
              id="a"
          />
          <div>decision = FALSE</div>
        </div>
    </>

  );
}
