import { Button } from "../..";
import { SideMenuProps } from "./types";

export const SideMenu = ({ handleCreateNewNode, title }: SideMenuProps) => {
  return (
    <aside className="bg-wesBeige h-full w-full border-l-4 border-black">
      <div className="flex h-full flex-col items-center justify-start">
        <div className="bg-shrekGreen flex h-1/6 w-full items-center justify-center border-b-4  border-black">
          <h1 className="text-2xl font-bold text-black">{title}</h1>
        </div>
        <div className="w-full h-2/6 flex items-center justify-between border-b-4 border-black">
          <div className="w-1/2 flex justify-center">
            <div style={{ width: 100, height: 100, backgroundColor: '#6A769E', fontWeight: '900', letterSpacing: '2px', border: ' 2px solid #000000', transform: 'rotate(45deg)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{transform: 'rotate(-45deg)'}}>Decisão</div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center w-1/2 justify-around border-l-4 border-black">
            <div className="flex items-center justify-center border-b-4 border-black h-1/2 w-full">
              <div className='bg-mrPink py-2 px-8 border-2 border-black rounded-lg tracking-widest text-black'>decision = false</div>
            </div>
            <div className="flex items-center justify-center h-1/2">
              <div className='bg-shrekGreen py-2 px-8 border-2 border-black rounded-lg tracking-widest text-black'>decision = true</div>
            </div>
          </div>
        </div>
        <div className="w-full h-2/6 flex items-center justify-between border-b-4 border-black">

        </div>
        <Button
          label="criar novo elemento"
          handleClick={handleCreateNewNode}
        ></Button>
      </div>
    </aside>
  );
};
