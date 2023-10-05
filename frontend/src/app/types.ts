import { XYPosition } from 'reactflow'

export type TNodeProps = {
    id: string
    type?: string
    position: XYPosition
    data: { label: string }
    className?: string
}

export type TEdgeProps = {
    id: string
    source: string
    target: string
    sourceHandle: string
}
