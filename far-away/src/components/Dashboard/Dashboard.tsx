import { FC, ReactElement } from "react";
import { InputForm } from "./InputForm";
import { CheckItem } from "./CheckItem";
import { ItemOperations } from "./ItemOperations";
import { IItem } from "../../ItemDecalaration";

interface DashboardProps {
  items: IItem[];
  addItem: (val: IItem) => void;
  removeItem: (id: number) => void;
  emptyList: () => void;
  setItemPacked: (val: IItem[] | ((prev: IItem[]) => IItem[])) => void;
  itemPacked: IItem[];
}

export const Dashboard: FC<DashboardProps> = ({
  items,
  addItem,
  removeItem,
  emptyList,
  itemPacked,
  setItemPacked,
}): ReactElement => {
  return (
    <div className="flex flex-col justify-between items-center h-screen ">
      <InputForm addItem={addItem} />
      <CheckItem
        items={items}
        removeItem={removeItem}
        setItemPacked={setItemPacked}
        itemPacked={itemPacked}
      />
      <ItemOperations emptyList={emptyList} />
    </div>
  );
};
