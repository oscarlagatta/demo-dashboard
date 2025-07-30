"use client"

import { useState, useCallback } from "react"
import {
  ReactFlow,
  Background,
  Controls,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  type Node,
  type Edge,
  type OnConnect,
  type OnNodesChange,
  type OnEdgesChange,
  MarkerType,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

import { initialNodes, initialEdges } from "@/lib/flow-data"
import CustomNode from "./custom-node"
import SectionBackgroundNode from "./section-background-node"

const nodeTypes = {
  custom: CustomNode,
  background: SectionBackgroundNode,
}

export default function FlowDiagram() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const [edges, setEdges] = useState<Edge[]>(initialEdges)

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  )
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  )
  const onConnect: OnConnect = useCallback(
    (connection) =>
      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            animated: true,
            type: "smoothstep",
            markerEnd: { type: MarkerType.ArrowClosed, color: "#6b7280" },
          },
          eds,
        ),
      ),
    [setEdges],
  )

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        proOptions={{ hideAttribution: true }}
        className="bg-white"
      >
        <Controls />
        <Background gap={16} size={1} />
      </ReactFlow>
    </div>
  )
}
