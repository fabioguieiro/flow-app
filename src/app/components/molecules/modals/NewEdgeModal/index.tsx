import { useEffect, useState } from 'react'
import { TNewEdgeModalProps } from './types'

export const NewEdgeModal = ({
    visible,
    closeModal,
    changeEdgeLabel,
}: TNewEdgeModalProps) => {
    const [newEdgeLabel, setNewEdgeLabel] = useState('')

    return (
        <div
            className={`${
                visible ? 'block' : 'hidden'
            } fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50`}
        >
            <div className="bg-white rounded-lg p-8">
                <h1 className="my-4 text-center text-2xl font-bold">
                    deseja nomear esta aresta?
                </h1>
                <div className="flex flex-col">
                    <label className="text-start">nome da aresta</label>
                    <input
                        type="text"
                        className="px-4 text-right text-black"
                        onChange={(e) => {
                            setNewEdgeLabel(e.target.value)
                        }}
                    ></input>
                </div>
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        className="rounded-lg bg-mrPink px-4 py-2 text-black"
                        onClick={closeModal}
                    >
                        Não
                    </button>
                    <button
                        className="mr-4 rounded-lg bg-shrekGreen px-4 py-2 text-black"
                        onClick={() => changeEdgeLabel(newEdgeLabel)}
                    >
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}
