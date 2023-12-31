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
                    Do you want to give this edge a label?
                </h1>
                <div className="flex flex-col">
                    <label className="text-start">Edge label</label>
                    <input
                        type="text"
                        className="h-8 rounded-md px-4 text-right text-black"
                        onChange={(e) => {
                            setNewEdgeLabel(e.target.value)
                        }}
                    ></input>
                </div>
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        className="w-32 rounded-lg bg-mrPink px-4 py-2 text-black"
                        onClick={closeModal}
                    >
                        No
                    </button>
                    <button
                        className="mr-4  w-32 rounded-lg bg-shrekGreen px-4 py-2 text-black"
                        onClick={() => changeEdgeLabel(newEdgeLabel)}
                    >
                        yes
                    </button>
                </div>
            </div>
        </div>
    )
}
