"use client";

import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Edge,
  useEdgesState,
  useNodesState,
  BackgroundVariant,
  MarkerType,
} from "reactflow";

import "reactflow/dist/style.css";
import { CustomDiamondNode } from "./components/atoms/CustomNodes/CustomDiamondNode";
import { SideMenu } from "./components";
import { CustomStartNode } from "./components/atoms/CustomNodes/CustomStartNode";
import { CustomSuccessNode } from "./components/atoms/CustomNodes/CustomSuccessNode";
import { CustomUnsuccessNode } from "./components/atoms/CustomNodes/CustomUnsuccessNode";
import { CustomConnectionLine } from "./components/atoms/CustomConnectionLine";

const nodeTypes = {
  diamondNode: CustomDiamondNode,
  startNode: CustomStartNode,
  successNode: CustomSuccessNode,
  unsuccessNode: CustomUnsuccessNode,
};

const defaultEdgeOptions = {
  style: { strokeWidth: 3, stroke: "black" },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "black",
  },
};

const connectionLineStyle = {
  strokeWidth: 3,
  stroke: "black",
};

const initialNodes = [
  {
    id: "1",
    type: "startNode",
    position: { x: 100, y: 100 },
    data: { label: "START" },
    className: "bg-transparent",
  },
];

type TEdgeProps = {
  id: string;
  source: string;
  target: string;
  sourceHandle: string;
};

const initialEdges: Array<TEdgeProps> = [];

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [edgeModal, setEdgeModal] = useState(false);
  const [newEdgeLabel, setNewEdgeLabel] = useState("");

  const onConnect = useCallback(
    (params: Edge<any> | Connection) => {
      setEdges((eds) => addEdge(params, eds));
      setEdgeModal(true);
    },
    [[setEdges]],
  );

  const getNodeByType = (
    nodeType: "diamondNode" | "successNode" | "unsuccessNode",
    label: string,
  ) => {
    switch (nodeType) {
      case "diamondNode":
        return {
          id: `${Math.random()}`,
          type: "diamondNode",
          position: { x: 500, y: 500 },
          data: { label: label },
          className: "bg-transparent",
        };
      case "successNode":
        return {
          id: `${Math.random()}`,
          type: "successNode",
          position: { x: 500, y: 500 },
          data: { label: label },
        };
      case "unsuccessNode":
        return {
          id: `${Math.random()}`,
          type: "unsuccessNode",
          position: { x: 500, y: 500 },
          data: { label: label },
        };
    }
  };
  const handleCreateNewNode = (
    nodeType: "diamondNode" | "successNode" | "unsuccessNode",
    label: string,
  ) => {
    const newNode = getNodeByType(nodeType, label);
    setNodes((nodes) => [...nodes, newNode]);
  };

  const changeEdgeLabel = () => {
    const lastEdge = edges[edges.length - 1];
    lastEdge.label = newEdgeLabel;

    const newEdges = edges.slice(0, edges.length - 1);
    newEdges.push(lastEdge);

    setEdges(newEdges);
    setEdgeModal(false);
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <div
        className="flex  bg-wesBeige"
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
            defaultEdgeOptions={defaultEdgeOptions}
            connectionLineStyle={connectionLineStyle}
            connectionLineComponent={CustomConnectionLine}
          >
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
          </ReactFlow>
        </div>
        <div className="flex w-1/3 flex-col items-center justify-center">
          <SideMenu
            title="CRIE UM NOVO NÓ"
            handleCreateNewNode={handleCreateNewNode}
          ></SideMenu>
        </div>
      </div>
      {edgeModal && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h1 className="text-center text-2xl font-bold">
              deseja nomear esta aresta?
            </h1>
            <div className="flex flex-col">
              <label>nome da aresta</label>
              <input
                type="text"
                placeholder="ex: sim"
                className="px-4 text-right text-black"
                onChange={(e) => {
                  setNewEdgeLabel(e.target.value);
                }}
              ></input>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <button
                className="rounded-lg bg-mrPink px-4 py-2 text-black"
                onClick={() => setEdgeModal(false)}
              >
                Não
              </button>
              <button
                className="mr-4 rounded-lg bg-shrekGreen px-4 py-2 text-black"
                onClick={changeEdgeLabel}
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
