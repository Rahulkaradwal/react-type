import { FC, ReactElement } from "react";

export const Header: FC = (): ReactElement => {
  return (
    <header className="bg-purple-500 w-full rounded-lg flex justify-between items-center p-4 text-xl text-slate-50">
      <p>usePopcorn</p>
      <input
        className=" rounded-md px-4 h-10 bg-purple-400 text-slate-50"
        id="search"
        name="search"
        // value=""
        placeholder="Movie Name"
      />
      <p>Found 10 Results</p>
    </header>
  );
};
