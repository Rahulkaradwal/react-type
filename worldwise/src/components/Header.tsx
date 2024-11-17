import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

export const Header: FC = (): ReactElement => {
  return (
    <header className=" text-slate-50 text-xl p-8 z-20 absolute w-full">
      <nav className="flex justify-between px-12 items-center">
        <Link to="/">
          <img className="w-60" src="logo.png" alt="logo" />
        </Link>
        <ul className="flex gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
