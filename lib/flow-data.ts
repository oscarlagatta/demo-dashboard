import { type Node, type Edge, MarkerType } from "@xyflow/react"

export const initialNodes: Node[] = [
  // Background Nodes
  {
    id: "bg-origination",
    type: "background",
    position: { x: 0, y: 0 },
    data: { title: "Origination", color: "bg-sky-50/50 border-sky-200" },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "320px", height: "820px" },
  },
  {
    id: "bg-validation",
    type: "background",
    position: { x: 320, y: 0 },
    data: {
      title: "Payment Validation and Routing",
      color: "bg-green-50/50 border-green-200",
    },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "320px", height: "820px" },
  },
  {
    id: "bg-middleware",
    type: "background",
    position: { x: 640, y: 0 },
    data: { title: "Middleware", color: "bg-amber-50/50 border-amber-200" },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "420px", height: "820px" },
  },
  {
    id: "bg-processing",
    type: "background",
    position: { x: 1060, y: 0 },
    data: {
      title: "Payment Processing, Sanctions & Investigation",
      color: "bg-rose-50/50 border-rose-200",
    },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "480px", height: "820px" },
  },

  // Origination Nodes
  {
    id: "swift-gateway",
    type: "custom",
    position: { x: 50, y: 100 },
    data: { title: "Swift Gateway", subtext: "AIT 11554" },
    draggable: false,
  },
  {
    id: "loan-iq",
    type: "custom",
    position: { x: 50, y: 220 },
    data: { title: "Loan IQ", subtext: "AIT 48581" },
    draggable: false,
  },
  {
    id: "cashpro-mobile",
    type: "custom",
    position: { x: 50, y: 340 },
    data: { title: "CashPro Mobile", subtext: "AIT 41107" },
    draggable: false,
  },
  {
    id: "cpo-api-gateway",
    type: "custom",
    position: { x: 50, y: 460 },
    data: { title: "CPO API Gateway", subtext: "AIT 11697" },
    draggable: false,
  },
  {
    id: "b2bi",
    type: "custom",
    position: { x: 50, y: 580 },
    data: { title: "B2Bi", subtext: "AIT 54071" },
    draggable: false,
  },
  {
    id: "ecs-origination",
    type: "custom",
    position: { x: 50, y: 700 },
    data: { title: "ECS", subtext: "AIT 634" },
    draggable: false,
  },

  // Payment Validation and Routing Nodes
  {
    id: "swift-alliance",
    type: "custom",
    position: { x: 370, y: 100 },
    data: { title: "Swift Alliance", subtext: "AIT 512" },
    draggable: false,
  },
  {
    id: "gpo",
    type: "custom",
    position: { x: 370, y: 220 },
    data: { title: "GPO", subtext: "AIT 70199" },
    draggable: false,
  },
  {
    id: "cashpro-payments",
    type: "custom",
    position: { x: 370, y: 340 },
    data: {
      title: "CashPro Payments (International & Domestic)",
      subtext: "AIT 28960",
    },
    draggable: false,
  },
  {
    id: "frp-us",
    type: "custom",
    position: { x: 370, y: 480 },
    data: { title: "FRP US", subtext: "AIT 15227" },
    draggable: false,
  },
  {
    id: "psh",
    type: "custom",
    position: { x: 370, y: 590 },
    data: { title: "PSH", subtext: "AIT 31427" },
    draggable: false,
  },
  {
    id: "ecs-validation",
    type: "custom",
    position: { x: 370, y: 700 },
    data: { title: "ECS", subtext: "AIT 834" },
    draggable: false,
  },

  // Middleware Nodes
  {
    id: "rpi",
    type: "custom",
    position: { x: 690, y: 220 },
    data: { title: "RPI", subtext: "AIT 60745" },
    draggable: false,
  },
  {
    id: "mrp",
    type: "custom",
    position: { x: 880, y: 400 },
    data: { title: "MRP", subtext: "AIT 4679" },
    draggable: false,
  },

  // Payment Processing, Sanctions & Investigation Nodes
  {
    id: "gbs-aries",
    type: "custom",
    position: { x: 1110, y: 160 },
    data: { title: "GBS Aries", subtext: "AIT 515" },
    draggable: false,
  },
  {
    id: "gtms-limits",
    type: "custom",
    position: { x: 1330, y: 160 },
    data: { title: "GTMS (Limits)", subtext: "AIT 62686" },
    draggable: false,
  },
  {
    id: "ets-sanctions",
    type: "custom",
    position: { x: 1220, y: 300 },
    data: { title: "ETS (Sanctions)", subtext: "AIT 46951" },
    draggable: false,
  },
  {
    id: "gfd-fraud",
    type: "custom",
    position: { x: 1220, y: 420 },
    data: { title: "GFD (Fraud)", subtext: "AIT 73929" },
    draggable: false,
  },
  {
    id: "wtx-rgw",
    type: "custom",
    position: { x: 1110, y: 580 },
    data: { title: "WTX / RGW", subtext: "AIT 1901 / 882" },
    draggable: false,
  },
  {
    id: "rtfp",
    type: "custom",
    position: { x: 1110, y: 700 },
    data: { title: "RTFP", subtext: "AIT 74014" },
    draggable: false,
  },
]

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "cpo-api-gateway",
    target: "gpo",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#6b7280", strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: "#6b7280",
    },
  },
]
