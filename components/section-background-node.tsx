import type { NodeProps } from "@xyflow/react"
import { cn } from "@/lib/utils"

const SectionBackgroundNode = ({ data }: NodeProps<{ title: string; color: string }>) => {
  return (
    <div className={cn("h-full w-full rounded-lg border-2 border-dashed", data.color)}>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-700">{data.title}</h2>
      </div>
    </div>
  )
}

export default SectionBackgroundNode
