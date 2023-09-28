import React from 'react';
import { Handle, Position } from 'reactflow';

type TCustomStartNodeProps = {
  data: {
    label: string;
  };
}

export const CustomStartNode = ({data}: TCustomStartNodeProps) => {
  return (
    <>
        <div className='bg-babyBlue py-2 px-8 border-2 border-black rounded-lg tracking-widest text-black'>
        <Handle
            type="source"
            position={Position.Bottom}
            id="a"
            
            isConnectable={true}
        />
        <div>{data.label}</div>
        </div>
    </>

  );
}

