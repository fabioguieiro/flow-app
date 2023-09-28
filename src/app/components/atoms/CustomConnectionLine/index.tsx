import React, { CSSProperties } from 'react';
import { getStraightPath } from 'reactflow';


type TCustomConnectionLineProps = {
    fromX: number;
    fromY: number;
    toX: number;
    toY: number;
    connectionLineStyle?: CSSProperties;

}

export const CustomConnectionLine = ({ fromX, fromY, toX, toY, connectionLineStyle }: TCustomConnectionLineProps) => {
  const [edgePath] = getStraightPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY,
  });

  return (
    <g>
      <path style={connectionLineStyle} fill="none" d={edgePath} />
      <circle cx={toX} cy={toY} fill="black" r={3} stroke="black" strokeWidth={1.5} />
    </g>
  );
}

