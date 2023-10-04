import { useCallback, useState } from 'react'
import { ActionButton } from '../../'
import { SideMenuProps } from './types'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { validationSchema } from '../../../validations'

export const SideMenu = ({ handleCreateNewNode, title }: SideMenuProps) => {
    const [selectedNode, setSelectedNode] = useState<0 | 1 | 2 | 3>(0)

    const handleSelectNode = useCallback(
        (node: 0 | 1 | 2 | 3) => {
            setSelectedNode(node)
        },
        [selectedNode]
    )

    const handleSwitchNode = (label?: string) => {
        switch (selectedNode) {
            case 1:
                handleCreateNewNode('diamondNode', label || '')
                break
            case 2:
                handleCreateNewNode('unsuccessNode', 'label teste')
                break
            case 3:
                handleCreateNewNode('successNode', 'label teste')
                break
        }
    }

    return (
        <aside className="h-full w-full border-l-4 border-black bg-wesBeige">
            <div className="flex h-full flex-col items-center justify-start">
                <div className="flex h-1/6 w-full items-center justify-center border-b-4 border-black  bg-shrekGreen">
                    <h1 className="text-2xl font-bold text-black">{title}</h1>
                </div>
                <div
                    className={`flex h-2/6 w-full items-center justify-between border-b-4 border-black `}
                >
                    <div
                        onClick={() => handleSelectNode(1)}
                        className={`flex h-full w-1/2 items-center justify-center ${
                            selectedNode === 1
                                ? 'bg-wesBeigeActive'
                                : 'bg-wesBeige'
                        }`}
                    >
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: '#6A769E',
                                fontWeight: '900',
                                letterSpacing: '2px',
                                border: ' 2px solid #000000',
                                transform: 'rotate(45deg)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <div style={{ transform: 'rotate(-45deg)' }}>
                                Decisão
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full w-1/2 flex-col items-center justify-around border-l-4 border-black">
                        <div
                            onClick={() => handleSelectNode(2)}
                            className={`flex h-1/2 w-full items-center justify-center border-b-4 border-black ${
                                selectedNode === 2
                                    ? 'bg-wesBeigeActive'
                                    : 'bg-wesBeige'
                            }`}
                        >
                            <div className="rounded-lg border-2 border-black bg-mrPink px-8 py-2 tracking-widest text-black">
                                decision = false
                            </div>
                        </div>
                        <div
                            onClick={() => handleSelectNode(3)}
                            className={`flex h-1/2 w-full items-center justify-center ${
                                selectedNode === 3
                                    ? 'bg-wesBeigeActive'
                                    : 'bg-wesBeige'
                            }`}
                        >
                            <div className="rounded-lg border-2 border-black bg-shrekGreen px-8 py-2 tracking-widest text-black">
                                decision = true
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-3/6 w-full items-center justify-center border-b-4 border-black">
                    {selectedNode === 1 ? (
                        <Formik
                            initialValues={{
                                nomeVariavel: '',
                                criterioComparacao: '',
                                valorComparacao: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                handleSwitchNode(
                                    `${values.nomeVariavel} ${values.criterioComparacao} ${values.valorComparacao}`
                                )
                            }}
                        >
                            <Form className="flex h-full w-8/12 flex-col items-center justify-between">
                                <div className="relative h-10 w-full min-w-[200px]">
                                    <label className="mt-0 text-[12px] text-black">
                                        Nome da Variável
                                    </label>
                                    <Field
                                        type="text"
                                        name="nomeVariavel"
                                        className="bg-white peer h-full w-full items-end border-b-4 border-l-4 border-r-4 border-black border-t-transparent px-3 py-2.5 text-sm text-black transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent"
                                    />
                                    <ErrorMessage
                                        name="nomeVariavel"
                                        component="div"
                                        className="text-end text-[12px] font-medium text-red"
                                    />
                                </div>
                                <div className="relative h-10 w-full min-w-[200px]">
                                    <label className="mt-0 text-[12px] text-black">
                                        Critério de comparação
                                    </label>
                                    <Field
                                        as="select"
                                        name="criterioComparacao"
                                        className="bg-white peer h-full w-full items-end border-b-4 border-l-4 border-r-4 border-black border-t-transparent px-3 py-2.5 text-sm  text-black transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent"
                                    >
                                        <option value=""></option>
                                        <option value=">">{`>`}</option>
                                        <option value="<">{`<`}</option>
                                        <option value="=">{`=`}</option>
                                        <option value="<=">{`<=`}</option>
                                        <option value=">=">{`>=`}</option>
                                    </Field>

                                    <ErrorMessage
                                        name="criterioComparacao"
                                        component="div"
                                        className="text-end text-[12px] font-medium text-red"
                                    />
                                </div>{' '}
                                <div className="relative h-10 w-full min-w-[200px]">
                                    <label className="mt-0 text-[12px] text-black">
                                        Valor de Comparação
                                    </label>
                                    <Field
                                        type="text"
                                        name="valorComparacao"
                                        className="bg-white peer h-full w-full items-end border-b-4 border-l-4 border-r-4 border-black border-t-transparent px-3 py-2.5 text-sm text-black transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent"
                                    />
                                    <ErrorMessage
                                        name="valorComparacao"
                                        component="div"
                                        className="text-end text-[12px] font-medium text-red"
                                    />
                                </div>
                                <ActionButton
                                    type={'submit'}
                                    label="criar novo elemento"
                                    handleClick={() => {}}
                                />
                            </Form>
                        </Formik>
                    ) : (
                        <ActionButton
                            type={'submit'}
                            label="criar novo elemento"
                            handleClick={handleSwitchNode}
                        />
                    )}
                </div>
            </div>
        </aside>
    )
}
