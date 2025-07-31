import { type Node, type Edge, MarkerType } from "@xyflow/react"
import apiData from "./api-data.json"

// Define a custom type for our application's node data, which uses parentId
export type AppNode = Omit<Node, "parentNode"> & {
  parentId?: string
}

// --- Static Section Definitions ---
const backgroundNodes: AppNode[] = [
  {
    id: "bg-origination",
    type: "background",
    position: { x: 0, y: 0 },
    data: { title: "Origination" },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "350px", height: "960px" },
  },
  {
    id: "bg-validation",
    type: "background",
    position: { x: 350, y: 0 },
    data: { title: "Payment Validation and Routing" },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "350px", height: "960px" },
  },
  {
    id: "bg-middleware",
    type: "background",
    position: { x: 700, y: 0 },
    data: { title: "Middleware" },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "450px", height: "960px" },
  },
  {
    id: "bg-processing",
    type: "background",
    position: { x: 1150, y: 0 },
    data: { title: "Payment Processing, Sanctions & Investigation" },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "500px", height: "960px" },
  },
]

// --- Data Transformation Logic ---

const classToParentId: Record<string, string> = {
  origination: "bg-origination",
  "payment validation and routing": "bg-validation",
  middleware: "bg-middleware",
  "payment processing, sanctions and investigation": "bg-processing",
}

const sectionPositions: Record<string, { baseX: number; positions: { x: number; y: number }[] }> = {
  "bg-origination": {
    baseX: 50,
    positions: [
      { x: 50, y: 100 },
      { x: 50, y: 220 },
      { x: 50, y: 340 },
      { x: 50, y: 460 },
      { x: 50, y: 580 },
      { x: 50, y: 700 },
    ],
  },
  "bg-validation": {
    baseX: 425,
    positions: [
      { x: 425, y: 100 },
      { x: 425, y: 220 },
      { x: 425, y: 340 },
      { x: 425, y: 480 },
      { x: 425, y: 590 },
      { x: 425, y: 700 },
    ],
  },
  "bg-middleware": {
    baseX: 750,
    positions: [
      { x: 750, y: 220 },
      { x: 950, y: 400 },
    ],
  },
  "bg-processing": {
    baseX: 1200,
    positions: [
      { x: 1200, y: 160 },
      { x: 1420, y: 160 },
      { x: 1310, y: 300 }, // GTMS (10)
      { x: 1310, y: 420 }, // Some other node
      { x: 1200, y: 580 }, // ETS (13)
      { x: 1200, y: 700 }, // GFD (14)
      { x: 1200, y: 820 },
    ],
  },
}

function transformApiData() {
  const sectionCounters: Record<string, number> = {
    "bg-origination": 0,
    "bg-validation": 0,
    "bg-middleware": 0,
    "bg-processing": 0,
  }

  const transformedNodes: AppNode[] = apiData.nodes
    .map((apiNode) => {
      const parentId = classToParentId[apiNode.class]
      if (!parentId) return null

      const sectionConfig = sectionPositions[parentId]
      const positionIndex = sectionCounters[parentId]++
      const position = sectionConfig.positions[positionIndex] || {
        x: sectionConfig.baseX,
        y: 100 + positionIndex * 120,
      }

      return {
        id: apiNode.id,
        type: "custom",
        position,
        data: { title: apiNode.data.label, subtext: `AIT ${apiNode.id}` },
        parentId: parentId,
        extent: "parent",
      }
    })
    .filter((n): n is AppNode => n !== null)

  const edgeStyle = { stroke: "#6b7280", strokeWidth: 2 }
  const markerProps = { type: MarkerType.ArrowClosed, color: "#6b7280" }

  const targetHandleCounters: Record<string, number> = {}
  const handleIds = ["a", "b", "c", "d", "e", "f"]

  const allEdges: { source: string; target: string }[] = []
  apiData.edges.forEach((apiEdge) => {
    if (Array.isArray(apiEdge.target)) {
      apiEdge.target.forEach((t) => {
        allEdges.push({ source: apiEdge.source, target: t })
      })
    } else {
      allEdges.push({ source: apiEdge.source, target: apiEdge.target })
    }
  })

  // Group edges by their source and target nodes
  const edgeGroups = allEdges.reduce(
    (acc, edge) => {
      const key = `${edge.source}->${edge.target}`
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(edge)
      return acc
    },
    {} as Record<string, { source: string; target: string }[]>,
  )

  const processedEdges = Object.values(edgeGroups).flatMap((group) => {
    const groupSize = group.length
    return group.map((edge, i) => ({
      ...edge,
      data: {
        // Calculate a parallelIndex centered around 0
        parallelIndex: groupSize > 1 ? i - (groupSize - 1) / 2 : 0,
      },
    }))
  })

  const transformedEdges = processedEdges.map(({ source, target, data }) => {
    if (!targetHandleCounters[target]) {
      targetHandleCounters[target] = 0
    }
    const handleIndex = targetHandleCounters[target]
    const targetHandle = handleIds[handleIndex % handleIds.length]
    targetHandleCounters[target]++

    return {
      id: `${source}-${target}-${targetHandle}`,
      source,
      target,
      type: "parallel", // Use the new custom edge type
      style: edgeStyle,
      markerStart: markerProps,
      markerEnd: markerProps,
      targetHandle,
      data, // Pass the parallelIndex to the edge component
    }
  })

  // --- Grouping Logic ---
  const groupNodeId = "scanning-credit-group"
  const nodesToGroupId = ["10", "13", "14"] // GTMS, ETS, GFD

  const nodesToGroup = transformedNodes.filter((n) => nodesToGroupId.includes(n.id))
  const otherNodes = transformedNodes.filter((n) => !nodesToGroupId.includes(n.id))

  let finalNodes = [...backgroundNodes, ...transformedNodes]

  if (nodesToGroup.length === nodesToGroupId.length) {
    const nodeWidth = 192 // w-48
    const nodeHeight = 80 // h-20
    const padding = 20

    let minX = Number.POSITIVE_INFINITY,
      minY = Number.POSITIVE_INFINITY,
      maxX = Number.NEGATIVE_INFINITY,
      maxY = Number.NEGATIVE_INFINITY

    nodesToGroup.forEach((node) => {
      minX = Math.min(minX, node.position.x)
      minY = Math.min(minY, node.position.y)
      maxX = Math.max(maxX, node.position.x + nodeWidth)
      maxY = Math.max(maxY, node.position.y + nodeHeight)
    })

    const groupPosition = { x: minX - padding, y: minY - padding }
    const groupWidth = maxX - minX + padding * 2
    const groupHeight = maxY - minY + padding * 2

    const groupNode: AppNode = {
      id: groupNodeId,
      type: "group",
      position: groupPosition,
      data: { label: "Scanning & Credit" },
      parentId: "bg-processing",
      zIndex: 0,
      style: { width: `${groupWidth}px`, height: `${groupHeight}px` },
    }

    const updatedNodesToGroup = nodesToGroup.map((node) => ({
      ...node,
      parentId: groupNodeId,
      position: {
        x: node.position.x - groupPosition.x,
        y: node.position.y - groupPosition.y,
      },
      extent: "parent",
    }))

    finalNodes = [...backgroundNodes, ...otherNodes, groupNode, ...updatedNodesToGroup]
  }

  return {
    nodes: finalNodes,
    edges: transformedEdges,
  }
}

const { nodes, edges } = transformApiData()

export const initialNodes: AppNode[] = nodes
export const initialEdges: Edge[] = edges
