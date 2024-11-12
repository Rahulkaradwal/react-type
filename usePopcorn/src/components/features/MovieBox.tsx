import { FC, ReactElement, ReactNode } from "react";

interface MovieBoxProps {
  children: ReactNode;
}

export const MovieBox: FC<MovieBoxProps> = ({ children }): ReactElement => {
  return <div className="border p-4 w-full rounded-lg">{children}</div>;
};
