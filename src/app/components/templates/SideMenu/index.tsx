import { Button } from "../..";

interface SideMenuProps {
  handleCreateNewNode: () => void;
}

export const SideMenu = ({ handleCreateNewNode }: SideMenuProps) => {
  return (
    <aside className="bg-shrekGreen  h-full w-full border-l-4 border-black">
      <div className="flex flex-col items-center justify-center">
        <Button
          label="criar novo elemento"
          handleClick={handleCreateNewNode}
        ></Button>
      </div>
    </aside>
  );
};
