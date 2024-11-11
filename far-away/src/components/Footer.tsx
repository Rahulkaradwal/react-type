import { FC, ReactElement } from "react";
import { IItem } from "../ItemDecalaration";

interface FooterProps {
  items: IItem[];
  itemPacked: IItem[];
}

export const Footer: FC<FooterProps> = ({
  items,
  itemPacked,
}): ReactElement => {
  return (
    <footer>
      <p className="bg-blue-300 p-6 flex justify-center text-amber-950 text-2xl ">
        You have {items.length} items in your list, and you already packed{" "}
        {itemPacked.length}
      </p>
    </footer>
  );
};
