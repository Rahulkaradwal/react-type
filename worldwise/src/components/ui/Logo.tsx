import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

export const Logo: FC = (): ReactElement => {
  return (
    <Link to="/">
      <img className="w-56 mb-4" src={logo} alt="logo" />
    </Link>
  );
};
