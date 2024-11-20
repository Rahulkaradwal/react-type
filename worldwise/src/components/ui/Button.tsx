import { FC, ReactElement } from "react";

interface ButtonProps {
  children: string;
  type: "primary" | "secondary";
  handleClick: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  handleClick,
}): ReactElement => {
  return (
    <button
      onClick={handleClick}
      className={`px-4 py-1 rounded-md text-lg  cursor-pointer ${
        type === "primary"
          ? "bg-green-500 text-white"
          : "bg-slate-600 text-white border"
      }`}
    >
      {children}
    </button>
  );
};
