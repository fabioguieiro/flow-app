"use client";

import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  useEdgesState,
  useNodesState,
  BackgroundVariant,
} from "reactflow";

import "reactflow/dist/style.css";
import {CustomDiamondNode} from "./components/atoms/CustomNodes/CustomDiamondNode";
import { SideMenu } from "./components";
import { CustomStartNode } from "./components/atoms/CustomNodes/CustomStartNode";

const nodeTypes = {
  diamondNode: CustomDiamondNode,
  startNode: CustomStartNode,
};
const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    type: 'startNode',
    data: { label: "income > 1000" }
  },
  { id: "2", type: 'diamondNode', position: { x: 120, y: 200 }, className: 'bg-wesBeige',  data: { label: "AGE > 18" }},
  { id: "3",type: 'diamondNode',className: 'bg-wesBeige', position: { x: 100, y: 400 }, data: { label: "income > 1000" } },
  {
    id: "4",
    position: { x: 400, y: 200 },
    data: { label: "decision = FALSE" },
  },
  {
    id: "5",
    position: { x: 400, y: 300 },
    data: { label: "decision = FALSE" },
  },
  { id: "6", position: { x: 100, y: 500 }, data: { label: "decision = TRUE" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2",sourceHandle: 'a' },
  { id: "e2-3", source: "2", target: "3", label: "yes", sourceHandle: 'c'  },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    label: "no",
  },
  { id: "e3-5", source: "3", target: "5", label: "no", sourceHandle: 'b' },
  { id: "e3-6", source: "3", target: "6", label: "yes", sourceHandle: 'c' },
];


export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const handleCreateNewNode = () => {
    const newNode = {
      id: `${Math.random()}`,
      position: { x: 50, y: 50 },
      data: { label: "new node" },
    };
    setNodes((nodes) => [...nodes, newNode]);
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <div
        className="bg-wesBeige  flex"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="flex  w-2/3 flex-col items-center justify-center">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
          >
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center">
          <SideMenu title="CRIE UM NOVO NÓ" handleCreateNewNode={handleCreateNewNode}></SideMenu>
        </div>
      </div>
    </main>
  );
}
