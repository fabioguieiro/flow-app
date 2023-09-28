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
import { SideMenu } from "./components";

const initialNodes = [
  { id: "1", position: { x: 100, y: 100 }, data: { label: "START" } },
  { id: "2", position: { x: 100, y: 200 }, data: { label: "Age > 18" } },
  { id: "3", position: { x: 100, y: 300 }, data: { label: "income > 1000" } },
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
  { id: "6", position: { x: 100, y: 400 }, data: { label: "decision = TRUE" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", label: "yes" },
  {
    id: "e2-4",
    source: "2",
    target: "4",
    label: "no",
  },
  { id: "e3-5", source: "3", target: "5", label: "no" },
  { id: "e3-6", source: "3", target: "6", label: "yes" },
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
          >
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center">
          <SideMenu handleCreateNewNode={handleCreateNewNode}></SideMenu>
        </div>
      </div>
    </main>
  );
}
