import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

export const NavItems: FC = (): ReactElement => {
  return (
    <nav className="flex py-1 px-1 w-fit text-slate-50 bg-slate-600  rounded-md  ">
      <span className="bg-slate-600 px-2 py-1  rounded-md ">
        <Link to="cities">Cities</Link>
      </span>
      <span className=" py-1 bg-slate-800  rounded-md px-2">
        <Link to="countries ">Countries</Link>
      </span>
    </nav>
  );
};
