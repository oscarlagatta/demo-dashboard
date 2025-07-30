import type { Node, Edge } from "reactflow"

export const initialNodes: Node[] = [
  // Background Nodes
  {
    id: "bg-origination",
    type: "background",
    position: { x: 0, y: 0 },
    data: { title: "Origination", color: "bg-blue-50/70" },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "320px", height: "950px" }, // Increased width
  },
  {
    id: "bg-validation",
    type: "background",
    position: { x: 320, y: 0 }, // Shifted right
    data: { title: "Payment Validation and Routing", color: "bg-green-50/70" },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "320px", height: "950px" },
  },
  {
    id: "bg-middleware",
    type: "background",
    position: { x: 640, y: 0 }, // Shifted right
    data: { title: "Middleware", color: "bg-yellow-50/70" },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "420px", height: "950px" },
  },
  {
    id: "bg-processing",
    type: "background",
    position: { x: 1060, y: 0 }, // Shifted right
    data: { title: "Payment Processing, Sanctions & Investigation", color: "bg-red-50/70" },
    draggable: false,
    selectable: false,
    zIndex: -1,
    style: { width: "480px", height: "950px" },
  },

  // Origination Column
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
    position: { x: 50, y: 250 },
    data: { title: "Loan IQ", subtext: "AIT 48581" },
    draggable: false,
  },
  {
    id: "cashpro-mobile",
    type: "custom",
    position: { x: 50, y: 400 },
    data: { title: "CashPro Mobile", subtext: "AIT 41107" },
    draggable: false,
  },
  {
    id: "cpo-api-gateway",
    type: "custom",
    position: { x: 50, y: 550 },
    data: { title: "CPO API Gateway", subtext: "AIT 11697" },
    draggable: false,
  },
  {
    id: "b2bi",
    type: "custom",
    position: { x: 50, y: 700 },
    data: { title: "B2Bi", subtext: "AIT 54071" },
    draggable: false,
  },
  {
    id: "ecs-origination",
    type: "custom",
    position: { x: 50, y: 850 },
    data: { title: "ECS", subtext: "AIT 54071" },
    draggable: false,
  },

  // Payment Validation and Routing Column
  {
    id: "swift-alliance",
    type: "custom",
    position: { x: 370, y: 100 }, // Shifted right
    data: { title: "Swift Alliance", subtext: "AIT 512" },
    draggable: false,
  },
  {
    id: "gpo",
    type: "custom",
    position: { x: 370, y: 250 }, // Shifted right
    data: { title: "GPO", subtext: "AIT 70199" },
    draggable: false,
  },
  {
    id: "cashpro-payments",
    type: "custom",
    position: { x: 370, y: 400 }, // Shifted right
    data: { title: "CashPro Payments (International & Domestic)", subtext: "AIT 28960" },
    draggable: false,
  },
  {
    id: "frp-us",
    type: "custom",
    position: { x: 370, y: 550 }, // Shifted right
    data: { title: "FRP US", subtext: "AIT 15227" },
    draggable: false,
  },
  {
    id: "psh",
    type: "custom",
    position: { x: 370, y: 700 }, // Shifted right
    data: { title: "PSH", subtext: "AIT 31427" },
    draggable: false,
  },
  {
    id: "ecs",
    type: "custom",
    position: { x: 370, y: 850 }, // Shifted right
    data: { title: "ECS", subtext: "AIT 834" },
    draggable: false,
  },

  // Middleware Column
  {
    id: "rpi",
    type: "custom",
    position: { x: 690, y: 175 }, // Shifted right
    data: { title: "RPI", subtext: "AIT 60745" },
    draggable: false,
  },
  {
    id: "rpi-2",
    type: "custom",
    position: { x: 880, y: 175 }, // Shifted right
    data: { title: "RPI-2", subtext: "AIT 60746" },
    draggable: false,
  },
  {
    id: "mrp",
    type: "custom",
    position: { x: 690, y: 475 }, // Shifted right
    data: { title: "MRP", subtext: "AIT 4679" },
    draggable: false,
  },

  // Payment Processing, Sanctions & Investigation Column
  {
    id: "gbs-aries",
    type: "custom",
    position: { x: 1110, y: 100 }, // Shifted right
    data: { title: "GBS Aries", subtext: "AIT 515" },
    draggable: false,
  },
  {
    id: "gtms",
    type: "custom",
    position: { x: 1330, y: 100 }, // Shifted right
    data: { title: "GTMS (Limits)", subtext: "AIT 62686" },
    draggable: false,
  },
  {
    id: "ets",
    type: "custom",
    position: { x: 1330, y: 250 }, // Shifted right
    data: { title: "ETS (Sanctions)", subtext: "AIT 46951" },
    draggable: false,
  },
  {
    id: "gfd",
    type: "custom",
    position: { x: 1330, y: 400 }, // Shifted right
    data: { title: "GFD (Fraud)", subtext: "AIT 73929" },
    draggable: false,
  },
  {
    id: "wtx-rgw",
    type: "custom",
    position: { x: 1220, y: 625 }, // Shifted right
    data: { title: "WTX / RGW", subtext: "AIT 1901 / 882" },
    draggable: false,
  },
  {
    id: "rtfp",
    type: "custom",
    position: { x: 1220, y: 775 }, // Shifted right
    data: { title: "RTFP", subtext: "AIT 74014" },
    draggable: false,
  },
]

export const initialEdges: Edge[] = [
  {
    id: "e-cpo-gpo",
    source: "cpo-api-gateway",
    target: "gpo",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#6b7280", strokeWidth: 2 },
  },
]
