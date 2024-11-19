import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";

export const NavItems: FC = (): ReactElement => {
  return (
    <nav className="flex py-1 px-1 w-fit text-slate-50 bg-slate-600  rounded-md  ">
      <NavLink
        className={({ isActive }) =>
          `px-2 py-1 rounded-md ${isActive ? "bg-slate-800" : "bg-slate-600"}`
        }
        to="city"
      >
        Cities
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `px-2 py-1 rounded-md ${isActive ? "bg-slate-800" : "bg-slate-600"}`
        }
        to="country"
      >
        Countries
      </NavLink>
    </nav>
  );
};
