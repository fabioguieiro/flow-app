import {
    CustomDiamondNode,
    CustomStartNode,
    CustomSuccessNode,
    CustomUnsuccessNode,
} from './components'

import MarkerType from 'reactflow'
import { TEdgeProps, TNodeProps } from './types'

export const getNodeByType = (
    nodeType: 'diamondNode' | 'successNode' | 'unsuccessNode',
    label: string
) => {
    switch (nodeType) {
        case 'diamondNode':
            return {
                id: `${Math.random()}`,
                type: 'diamondNode',
                position: { x: 500, y: 500 },
                data: { label: label },
                className: 'bg-transparent',
            }
        case 'successNode':
            return {
                id: `${Math.random()}`,
                type: 'successNode',
                position: { x: 500, y: 500 },
                data: { label: label },
            }
        case 'unsuccessNode':
            return {
                id: `${Math.random()}`,
                type: 'unsuccessNode',
                position: { x: 500, y: 500 },
                data: { label: label },
            }
    }
}

export const nodeTypes = {
    diamondNode: CustomDiamondNode,
    startNode: CustomStartNode,
    successNode: CustomSuccessNode,
    unsuccessNode: CustomUnsuccessNode,
}

export const defaultEdgeOptions = {
    style: { strokeWidth: 3, stroke: 'black' },
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: 'black',
    },
}

export const connectionLineStyle = {
    strokeWidth: 3,
    stroke: 'black',
}

export const initialNodes: Array<TNodeProps> = [
    {
        id: '1',
        type: 'startNode',
        position: { x: 100, y: 100 },
        data: { label: 'START' },
        className: 'bg-transparent',
    },
]

export const initialEdges: Array<TEdgeProps> = []

export const validateFlux = (flux: any) => {
    const nodes = flux.nodes
    const edges = flux.edges

    const startNodes = nodes.filter(
        (node: TNodeProps) => node.type === 'startNode'
    )
    const diamondNodes = nodes.filter(
        (node: TNodeProps) => node.type === 'diamondNode'
    )
    const successNodes = nodes.filter(
        (node: TNodeProps) => node.type === 'successNode'
    )
    const unsuccessNodes = nodes.filter(
        (node: TNodeProps) => node.type === 'unsuccessNode'
    )

    if (startNodes.length !== 1) {
        return false
    }

    for (const diamondNode of diamondNodes) {
        const incomingEdges = edges.filter(
            (edge: TEdgeProps) => edge.target === diamondNode.id
        )
        const outgoingEdges = edges.filter(
            (edge: TEdgeProps) => edge.source === diamondNode.id
        )

        if (incomingEdges.length !== 1 || outgoingEdges.length !== 2) {
            return false
        }
    }

    for (const successNode of successNodes) {
        const incomingEdges = edges.filter(
            (edge: TEdgeProps) => edge.target === successNode.id
        )
        const outgoingEdges = edges.filter(
            (edge: TEdgeProps) => edge.source === successNode.id
        )

        if (incomingEdges.length !== 1 || outgoingEdges.length !== 0) {
            return false
        }
    }

    for (const unsuccessNode of unsuccessNodes) {
        const incomingEdges = edges.filter(
            (edge: TEdgeProps) => edge.target === unsuccessNode.id
        )
        const outgoingEdges = edges.filter(
            (edge: TEdgeProps) => edge.source === unsuccessNode.id
        )

        if (incomingEdges.length !== 1 || outgoingEdges.length !== 0) {
            return false
        }
    }

    return true
}
