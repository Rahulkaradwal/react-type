import { FC, ReactElement } from "react";

export const Header: FC = (): ReactElement => {
  return (
    <header className="flex bg-gray-800 text-white top-0 py-6 flex-wrap justify-between px-12 bg-silver">
      <h1 className="text-lg font-semibold">Pizza Menu</h1>
      <nav>
        <ul className="flex gap-10 text-m cursor-pointer">
          <li className="">Home</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
