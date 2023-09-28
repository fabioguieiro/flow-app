import React from 'react';
import { Handle, Position } from 'reactflow';

type TCustomSuccessNodeProps = {
  data: {
    label: string;
  };
}

export const CustomSuccessNode = ({data}: TCustomSuccessNodeProps) => {
  return (
    <>
        <div className='bg-shrekGreen py-2 px-8 border-2 border-black rounded-lg tracking-widest text-black'>
          <Handle
              type="target"
              position={Position.Top}
              onConnect={(params) => console.log('handle onConnect', params)}
              isConnectable={true}
              id="a"
          />


          <div>{data.label}</div>
        </div>
    </>

  );
}
