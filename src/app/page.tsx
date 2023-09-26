"use client";

import ReactFlow from "reactflow";

import "reactflow/dist/style.css";
const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "START" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  { id: "3", position: { x: 200, y: 100 }, data: { label: "3" } },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex  h-[32rem] w-[32rem] flex-col items-center justify-center">
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </main>
  );
}
