import { FC, ReactElement } from "react";

const buttonClass =
  "block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";

interface ButtonProps {
  disabled?: boolean;
  text: string;
}

export const Button: FC<ButtonProps> = ({ disabled, text }): ReactElement => {
  return (
    <button disabled={disabled} className={buttonClass}>
      {text}
    </button>
  );
};
