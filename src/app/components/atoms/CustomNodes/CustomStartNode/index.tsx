import React from 'react';
import { Handle, Position } from 'reactflow';


export const CustomStartNode = () => {
  return (
    <>
        <div className='bg-mrPink py-2 px-8 border-2 border-black rounded-lg tracking-widest text-black'>
          <Handle
              type="target"
              id='a'
              position={Position.Bottom}
              onConnect={(params) => console.log('handle onConnect', params)}
              isConnectable={true}
          />
          <div >START</div>
        </div>
    </>

  );
}
