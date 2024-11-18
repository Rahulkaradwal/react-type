import { FC, ReactElement } from "react";

interface ErrorProps {
  message: string;
}

export const Error: FC<ErrorProps> = ({ message }): ReactElement => {
  return (
    <div className="w-3/5 bg-slate-700 p-6 flex flex-col gap-10 items-center ">
      <h1>{message}</h1>
    </div>
  );
};
