import { FC, ReactElement } from "react";

export const Header: FC = (): ReactElement => {
  return (
    <header className="flex items-center justify-center bg-orange-500 text-amber-950 text-5xl p-8">
      <h1>Far Away</h1>
    </header>
  );
};
