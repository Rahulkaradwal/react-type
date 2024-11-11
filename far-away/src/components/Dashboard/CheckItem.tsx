import { FC, ReactElement } from "react";
import { Button } from "../ui/Button";
import { IItem } from "../../ItemDecalaration";

interface CheckItemProps {
  items: IItem[];
  removeItem: (id: number) => void;
  itemPacked: IItem[];
  setItemPacked: (val: IItem[] | ((prev: IItem[]) => IItem[])) => void;
}

export const CheckItem: FC<CheckItemProps> = ({
  items,
  removeItem,
  itemPacked,
  setItemPacked,
}): ReactElement => {
  // state to mark the item packed

  const handleRemove = (val: number): void => {
    removeItem(val);
  };

  const handleChange = (item: IItem): void => {
    // Toggle item in the itemPacked state array
    setItemPacked((prev: IItem[]) =>
      prev.some((packedItem) => packedItem.id === item.id)
        ? prev.filter((packedItem) => packedItem.id !== item.id)
        : [...prev, item]
    );
  };

  return (
    <div className="flex gap-4 flex-wrap p-10  h-full">
      {items.length === 0 && <p>No Items</p>}
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 items-center border h-fit w-fit py-2 px-4 rounded-md"
          >
            <input
              type="checkbox"
              name={item.name}
              id={item.id.toString()}
              onChange={() => handleChange(item)}
            />
            <label
              className={
                itemPacked.some((packedItem) => packedItem.id === item.id)
                  ? "line-through"
                  : ""
              }
              htmlFor={item.id.toString()}
            >
              {item.quantity} {item.name}
            </label>
            <Button
              style="text-red-900 text-lg "
              // onClick={handleRemove.bind(null, item.id)}
              onClick={() => handleRemove(item.id)}
            >
              X
            </Button>
          </div>
        ))}
    </div>
  );
};
