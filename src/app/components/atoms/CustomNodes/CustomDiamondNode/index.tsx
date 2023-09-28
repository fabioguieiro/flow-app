import React from 'react';
import { Handle, Position } from 'reactflow';


export const CustomDiamondNode = () => {
  return (
    <div style={{position: 'relative'}}>
        <div style= {{ width: 100, height: 100, backgroundColor: '#6A769E', fontWeight: '900', letterSpacing: '2px', border: ' 2px solid #000000', transform: 'rotate(45deg)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Handle
            type="target"
            position={Position.Top}
            style={{ background: '#555',left: -2,  top: -5 }}
            onConnect={(params) => console.log('handle onConnect', params)}
            isConnectable={true}
            id="a"
        />


        <Handle
            type="source"
            position={Position.Right}
            id="b"
            style={{ top: 0, background: '#555' }}
            isConnectable={true}
        />
        <Handle
            type="source"
            position={Position.Bottom}
            id="c"
            style={{ bottom: -5, left: 99, top: 'auto', background: '#555' }}
            isConnectable={true}
        />
      <div style={{transform: 'rotate(-45deg)'}}>{`AGE > 18`}</div>
        </div>
    </div>

  );
}
