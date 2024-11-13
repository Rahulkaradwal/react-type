import { FC, ReactElement } from "react";

interface ButtonProps {
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick }): ReactElement => {
  return (
    <button
      className="text-xl mb-3 rounded-full bg-gray-700 p-1 px-4  text-slate-50"
      onClick={onClick}
    >
      -
    </button>
  );
};
