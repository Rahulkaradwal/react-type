import { FC, ReactElement } from "react";

export const Footer: FC = (): ReactElement => {
  return (
    <footer>
      <p className="bg-blue-300 p-6 flex justify-center text-amber-950 text-2xl ">
        You have x items in your list, and you already packed x %
      </p>
    </footer>
  );
};
