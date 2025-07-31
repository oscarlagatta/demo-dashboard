import type { NodeProps } from "@xyflow/react"

const GroupNode = ({ data }: NodeProps<{ label: string }>) => {
  return (
    <div className="h-full w-full rounded-lg border-2 border-blue-300 bg-blue-50/50 dots-pattern">
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-800">{data.label}</h3>
      </div>
    </div>
  )
}

export default GroupNode
