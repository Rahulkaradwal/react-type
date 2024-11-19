import { FC, ReactElement, ReactNode } from "react";

interface IFormInput {
  text: string;
  children: ReactNode;
}

export const FormInput: FC<IFormInput> = ({ text, children }): ReactElement => {
  return (
    <div className="flex gap-2 w-full flex-col">
      <p className="text-sm opacity-80 uppercase ">{text}</p>
      {children}
    </div>
  );
};
