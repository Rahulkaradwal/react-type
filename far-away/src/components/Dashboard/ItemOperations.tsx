import { FC, ReactElement } from "react";
import { Button } from "../ui/Button";

interface ItemOperationsProps {
  emptyList: () => void;
}

export const ItemOperations: FC<ItemOperationsProps> = ({
  emptyList,
}): ReactElement => {
  return (
    <div className="flex gap-3 items-center  w-fit py-2 px-4 rounded-md">
      <select id="sortBy">
        <option value="sortByName">Sort by Name</option>
        <option value="sortByNumber">Sort by Number</option>
      </select>
      <Button
        style="rounded-full bg-yellow-400 text-lg text-amber-950 px-4 py-1 "
        onClick={emptyList}
      >
        Clear List
      </Button>
    </div>
  );
};
