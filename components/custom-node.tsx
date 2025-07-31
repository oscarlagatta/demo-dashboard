import { memo } from "react"
import { Handle, Position, NodeProps, Node  } from "@xyflow/react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export type CustomNodeData = {
    title: string;
    subtext: string;
}

export type CustomNodeType = Node<CustomNodeData, 'custom'>;


const CustomNode = ({ data }: NodeProps<CustomNodeType>) => {
  return (
    <Card className="shadow-md bg-gray-100 border-2 border-[rgb(10,49,97)] w-60">
      {/* Multiple target handles on the left side to avoid edge overlap */}
      <Handle type="target" position={Position.Left} id="a" className="!bg-gray-400 w-2 h-2" style={{ top: "25%" }} />
      <Handle type="target" position={Position.Left} id="b" className="!bg-gray-400 w-2 h-2" style={{ top: "75%" }} />
      <Handle type="target" position={Position.Left} id="c" className="!bg-gray-400 w-2 h-2" style={{ top: "40%" }} />
      <Handle type="target" position={Position.Left} id="d" className="!bg-gray-400 w-2 h-2" style={{ top: "60%" }} />

      {/* Default source handles */}
      <Handle type="source" position={Position.Right} className="!bg-gray-400 w-2 h-2" />
      <Handle type="source" position={Position.Top} className="!bg-gray-400 w-2 h-2" />
      <Handle type="source" position={Position.Bottom} className="!bg-gray-400 w-2 h-2" />

      <CardHeader className="p-2">
        <CardTitle className="text-xs font-bold">{data.title}</CardTitle>
        <p className="text-[10px] text-muted-foreground">{data.subtext}</p>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <div className="flex space-x-1">
          <Button variant="outline" className="h-6 px-2 text-[10px] shadow-sm bg-transparent">
            Flow
          </Button>
          <Button variant="outline" className="h-6 px-2 text-[10px] shadow-sm bg-transparent">
            Trend
          </Button>
          <Button variant="outline" className="h-6 px-2 text-[10px] shadow-sm bg-transparent">
            Balanced
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default memo(CustomNode)
