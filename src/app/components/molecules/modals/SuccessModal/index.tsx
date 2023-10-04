import { SuccessIcon } from '@/app/assets/icons/SuccessIcon'

type TSuccessModalProps = {
    visible: boolean
    closeModal: () => void
}

export const SuccessModal = ({ visible, closeModal }: TSuccessModalProps) => {
    console.log('visible', visible)
    return (
        <div
            onClick={() => closeModal}
            className={`${
                visible ? 'block' : 'hidden'
            } fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50`}
        >
            <div
                className="right-auto top-32 flex h-96 w-128 flex-col items-center justify-around border-4 border-black bg-shrekGreen text-center text-black"
                onClick={(e) => e.stopPropagation()}
            >
                O fluxo foi criado com sucesso!
                <SuccessIcon width={100} height={100} color={'#000'} />
                <button
                    onClick={closeModal}
                    className="w-1/3 bg-matrixGreen p-4 text-walterWhite "
                >
                    Limpar fluxo
                </button>
            </div>
        </div>
    )
}
