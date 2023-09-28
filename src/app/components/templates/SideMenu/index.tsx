import { Button } from "../..";
import { SideMenuProps } from "./types";

export const SideMenu = ({ handleCreateNewNode, title }: SideMenuProps) => {
  return (
    <aside className="bg-wesBeige h-full w-full border-l-4 border-black">
      <div className="flex h-full flex-col items-center justify-start">
        <div className="bg-shrekGreen flex h-1/6 w-full items-center justify-center border-b-4  border-black">
          <h1 className="text-2xl font-bold text-black">{title}</h1>
        </div>
        <Button
          label="criar novo elemento"
          handleClick={handleCreateNewNode}
        ></Button>
      </div>
    </aside>
  );
};
