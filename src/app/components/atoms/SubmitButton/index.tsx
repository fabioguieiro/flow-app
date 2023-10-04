type TSubmitButtonProps = {
    onClick: () => void
}
export const SubmitButton = ({ onClick }: TSubmitButtonProps) => {
    return (
        <button onClick={onClick} className=" bg-matrixGreen p-4">
            Enviar Fluxo
        </button>
    )
}
