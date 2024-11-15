import { FC, ReactElement } from "react";
import { Action } from "../Home/Home";

const footerClasses = "border-2 rounded-full px-6 py-2";

interface FooterProps {
  dispatch: React.Dispatch<Action>;
}
export const Footer: FC<FooterProps> = ({ dispatch }): ReactElement => {
  return (
    <footer className="flex justify-between px-10 text-slate-50  h-20 w-full items-center   rounded-lg  ">
      <p className={footerClasses}>07:02</p>
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className={footerClasses}
      >
        Next
      </button>
    </footer>
  );
};
