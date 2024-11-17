import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

export const AppNavigation: FC = (): ReactElement => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="#">Home</Link>
        </li>
        <li>
          <Link to="#">Pricing</Link>
        </li>
        <li>
          <Link to="#">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
