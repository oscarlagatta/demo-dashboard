import type { NodeProps, Node } from "@xyflow/react"
export type SectionBackgroundData = {
    title: string;
    color: string;
}

// Define the complete node type
export type SectionBackgroundNodeType = Node<SectionBackgroundData, 'sectionBackground'>;

const SectionBackgroundNode = ({ data }: NodeProps<SectionBackgroundNodeType>) => {
  return (
    <div className="h-full w-full rounded-lg border-2 border-gray-300 [border-style:inset]">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-700">{data.title}</h2>
      </div>
    </div>
  )
}

export default SectionBackgroundNode
