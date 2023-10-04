import { FailIcon } from "@/app/assets/icons/FailIcon";

type TFailModalProps = {
  visible: boolean;
  closeModal: () => void;
};
export const FailModal = ({ visible, closeModal }: TFailModalProps) => {
  return (
    <div
      onClick={() => closeModal}
      className={`${
        visible ? "block" : "hidden"
      } fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 text-black`}
    >
      <div
        className="right-auto top-32 flex h-96 w-128 flex-col items-center justify-around border-4 border-black bg-mrPink text-center"
        onClick={(e) => e.stopPropagation()}
      >
        O fluxo criado é invalido, confira se todos os nós estão conectados e
        envie novamente.
        <FailIcon width={100} height={100} color={"#000"} />
        <button
          onClick={closeModal}
          className="bg-walterWhite w-1/3 p-4 text-black"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
