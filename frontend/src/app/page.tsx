'use client'

import { useCallback, useState } from 'react'
import ReactFlow, {
    addEdge,
    Background,
    Connection,
    Edge,
    useEdgesState,
    useNodesState,
    BackgroundVariant,
} from 'reactflow'

import 'reactflow/dist/style.css'
import {
    SideMenu,
    CustomConnectionLine,
    SuccessModal,
    FailModal,
    NewEdgeModal,
    SubmitButton,
    SideMenuWrapper,
    FlowAreaWrapper,
} from './components'
import { handlePostRequest } from './services/ApiRequest'

import {
    connectionLineStyle,
    defaultEdgeOptions,
    getNodeByType,
    initialEdges,
    initialNodes,
    nodeTypes,
    validateFlux,
} from './utils'

export default function Home() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
    const [successModalVisible, setSuccessModalVisible] = useState(false)
    const [failModalVisible, setFailModalVisible] = useState(false)
    const [newEdgeModalVisible, setNewEdgeModalVisible] = useState(false)

    const onConnect = useCallback(
        (params: Edge<any> | Connection) => {
            setEdges((eds) => addEdge(params, eds))
            setNewEdgeModalVisible(true)
        },
        [[setEdges]]
    )

    const handleCleanFlux = () => {
        setNodes(initialNodes)
        setEdges(initialEdges)
    }

    const handleCreateNewNode = (
        nodeType: 'diamondNode' | 'successNode' | 'unsuccessNode',
        label: string
    ) => {
        const newNode = getNodeByType(nodeType, label)
        setNodes((nodes) => [...nodes, newNode])
    }

    const changeEdgeLabel = (newEdgeLabel: string) => {
        const lastEdge = edges[edges.length - 1]
        lastEdge.label = newEdgeLabel

        const newEdges = edges.slice(0, edges.length - 1)
        newEdges.push(lastEdge)

        setEdges(newEdges)
        setNewEdgeModalVisible(false)
    }

    const handleSubmitFlux = () => {
        const flux = {
            nodes: nodes,
            edges: edges,
        }

        const response = validateFlux(flux)
        if (response) {
            handlePostRequest(flux)
            setSuccessModalVisible(true)
        } else {
            setFailModalVisible(true)
        }
    }

    return (
        <main className="flex flex-col items-center justify-between">
            <div
                className="flex  bg-wesBeige"
                style={{ width: '100vw', height: '100vh' }}
            >
                <FlowAreaWrapper>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        defaultEdgeOptions={defaultEdgeOptions}
                        connectionLineStyle={connectionLineStyle}
                        connectionLineComponent={CustomConnectionLine}
                    >
                        <Background
                            variant={BackgroundVariant.Dots}
                            gap={12}
                            size={1}
                        />
                    </ReactFlow>
                    <div className="absolute bottom-4 right-4">
                        <SubmitButton onClick={handleSubmitFlux} />
                    </div>
                </FlowAreaWrapper>
                <SideMenuWrapper>
                    <SideMenu
                        title="CREATE A NEW NODE"
                        handleCreateNewNode={handleCreateNewNode}
                    ></SideMenu>
                </SideMenuWrapper>
            </div>

            <NewEdgeModal
                visible={newEdgeModalVisible}
                closeModal={() => setNewEdgeModalVisible(false)}
                changeEdgeLabel={changeEdgeLabel}
            />
            <SuccessModal
                visible={successModalVisible}
                closeModal={() => {
                    setSuccessModalVisible(false)
                    handleCleanFlux()
                }}
            ></SuccessModal>
            <FailModal
                visible={failModalVisible}
                closeModal={() => {
                    setFailModalVisible(false)
                }}
            ></FailModal>
        </main>
    )
}
