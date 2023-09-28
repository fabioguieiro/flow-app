import { ButtonProps } from "./types";
export const Button = ({ label, handleClick }: ButtonProps) => {
  return (
    <button
      className="bg-mechanicOrange font-inter my-7 p-4"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
