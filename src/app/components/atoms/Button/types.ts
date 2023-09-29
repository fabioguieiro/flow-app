export interface ButtonProps {
  handleClick?: () => void;
  label: string;
  type: "button" | "submit" | "reset";
}
