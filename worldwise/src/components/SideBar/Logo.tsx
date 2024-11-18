import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

export const Logo: FC = (): ReactElement => {
  return (
    <Link to="/">
      <img className="w-56 mb-4" src="logo.png" alt="logo" />
    </Link>
  );
};
