import { useCallback, useState } from "react";
import { Button } from "../..";
import { SideMenuProps } from "./types";

export const SideMenu = ({ handleCreateNewNode, title }: SideMenuProps) => {
  const [selectedNode ,setSelectedNode ] = useState<0 |1 | 2 | 3>(0)

  const handleSelectNode = useCallback ((node: 0 |1 | 2 | 3)=> {
    setSelectedNode(node)
  }, [selectedNode])

  const handleClick = () => {
    switch(selectedNode){
      case 1: handleCreateNewNode('diamondNode', 'label teste')
        break;
      case 2: handleCreateNewNode('unsuccessNode', 'label teste')
        break;
      case 3: handleCreateNewNode('successNode', 'label teste')
        break;
    }
  }

  return (
    <aside className="bg-wesBeige h-full w-full border-l-4 border-black">
      <div className="flex h-full flex-col items-center justify-start">
        <div className="bg-shrekGreen flex h-1/6 w-full items-center justify-center border-b-4  border-black">
          <h1 className="text-2xl font-bold text-black">{title}</h1>
        </div>
        <div  className={`w-full h-2/6 flex items-center justify-between border-b-4 border-black `}>
          <div onClick={()=>handleSelectNode(1)} className={`w-1/2 h-full flex justify-center items-center ${selectedNode === 1 ? 'bg-wesBeigeActive': 'bg-wesBeige'}`}>
            <div style={{ width: 100, height: 100, backgroundColor: '#6A769E', fontWeight: '900', letterSpacing: '2px', border: ' 2px solid #000000', transform: 'rotate(45deg)', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{transform: 'rotate(-45deg)'}}>Decisão</div>
            </div>
          </div>
          <div className="flex flex-col h-full items-center w-1/2 justify-around border-l-4 border-black">
            <div onClick={()=>handleSelectNode(2)} className={`flex items-center justify-center border-b-4 border-black h-1/2 w-full ${selectedNode === 2 ? 'bg-wesBeigeActive': 'bg-wesBeige'}`}>
              <div className='bg-mrPink py-2 px-8 border-2 border-black rounded-lg tracking-widest text-black'>decision = false</div>
            </div>
            <div onClick={()=>handleSelectNode(3)} className={`flex items-center justify-center h-1/2 w-full ${selectedNode === 3 ? 'bg-wesBeigeActive': 'bg-wesBeige'}`}>
              <div className='bg-shrekGreen py-2 px-8 border-2 border-black rounded-lg tracking-widest text-black'>decision = true</div>
            </div>
          </div>
        </div>
        <div className="w-full h-2/6 flex items-center justify-center border-b-4 border-black">
          {selectedNode === 1 ?

        <form className="w-8/12 h-full">
          <div className=" flex h-full flex-col justify-around items-center">
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full border-l-4 border-r-4 border-b-4 border-black border-t-transparent bg-white items-end px-3 py-2.5 text-sm  text-black  transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent"
                placeholder=" "
                />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md  before:border-black before:transition-all after:pointer-events-none  after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md  after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500   ">
              nome da variável
              </label>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <select
                className="peer h-full w-full border-l-4 border-r-4 border-b-4 border-black border-t-transparent bg-white items-end px-3 py-2.5 text-sm  text-black  transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent"
                placeholder=" "
                >
                <option>=</option>
                <option>{`>`}</option>
                <option>{`<`}</option>
                <option>{`>=`}</option>
                <option>{`<=`}</option>
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md  before:border-black before:transition-all after:pointer-events-none  after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md  after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500   ">
              critério de comparação
              </label>
            </div>
            <div className="relative h-10 w-full min-w-[200px]">
              <input
                className="peer h-full w-full border-l-4 border-r-4 border-b-4 border-black border-t-transparent bg-white items-end px-3 py-2.5 text-sm  text-black  transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent"
                placeholder=" "
                />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-black transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md  before:border-black before:transition-all after:pointer-events-none  after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md  after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-black peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500   ">
              valor de coparação
              </label>
            </div>
          </div>

        </form>

      : null}
        </div>
      <Button
        label="criar novo elemento"
        handleClick={handleClick}
        />
      </div>
    </aside>
  );
};
