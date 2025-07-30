import { memo } from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const CustomNode = ({ data }: NodeProps<{ title: string; subtext: string }>) => {
  return (
    <Card className="shadow-md bg-gray-100 border-2 border-blue-500">
      <Handle type="target" position={Position.Left} className="!bg-gray-400 w-2 h-2" />
      <Handle type="source" position={Position.Right} className="!bg-gray-400 w-2 h-2" />
      <Handle type="source" position={Position.Top} className="!bg-gray-400 w-2 h-2" />
      <Handle type="source" position={Position.Bottom} className="!bg-gray-400 w-2 h-2" />
      <CardHeader className="p-2">
        <CardTitle className="text-xs font-bold whitespace-nowrap">{data.title}</CardTitle>
        <p className="text-[10px] text-muted-foreground">{data.subtext}</p>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <div className="flex space-x-1">
          <Badge variant="secondary" className="text-[9px] h-4 px-1 bg-green-100 text-green-800 hover:bg-green-200">
            Flow
          </Badge>
          <Badge variant="secondary" className="text-[9px] h-4 px-1 bg-green-100 text-green-800 hover:bg-green-200">
            Trend
          </Badge>
          <Badge variant="secondary" className="text-[9px] h-4 px-1 bg-green-100 text-green-800 hover:bg-green-200">
            Balanced
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export default memo(CustomNode)
