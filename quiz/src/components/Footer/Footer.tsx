import { FC, ReactElement } from "react";

const footerClasses = "border-2 rounded-full px-6 py-2";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="flex justify-between px-10 text-slate-50  h-20 w-full items-center   rounded-lg  ">
      <p className={footerClasses}>07:02</p>
      <button className={footerClasses}>Next</button>
    </footer>
  );
};
