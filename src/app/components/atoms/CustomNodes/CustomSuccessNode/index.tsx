import React from "react";
import { Handle, Position } from "reactflow";

export const CustomSuccessNode = () => {
  return (
    <>
      <div className="rounded-lg border-2 border-black bg-shrekGreen px-8 py-2 tracking-widest text-black">
        <Handle
          type="target"
          position={Position.Top}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={true}
          id="a"
        />

        <div>decision = TRUE</div>
      </div>
    </>
  );
};
