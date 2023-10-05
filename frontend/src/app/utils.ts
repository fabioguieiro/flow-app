import {
    CustomDiamondNode,
    CustomStartNode,
    CustomSuccessNode,
    CustomUnsuccessNode,
} from './components'

import { MarkerType } from 'reactflow'
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
