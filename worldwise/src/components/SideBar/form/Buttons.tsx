import { FC, ReactElement, ReactNode } from "react";

interface ButtonsProps {
  children: ReactNode;
}
export const Buttons: FC<ButtonsProps> = ({ children }): ReactElement => {
  return <div className="flex justify-between  w-full ">{children}</div>;
};
