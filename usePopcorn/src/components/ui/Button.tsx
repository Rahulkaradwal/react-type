import { FC, ReactElement } from "react";

interface ButtonProps {
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ onClick }): ReactElement => {
  return (
    <button className="text-xl  text-slate-50" onClick={onClick}>
      -
    </button>
  );
};
