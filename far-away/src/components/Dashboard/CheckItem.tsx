import { FC, ReactElement } from "react";
import { Button } from "../ui/Button";
import { IItem } from "../../ItemDecalaration";

interface CheckItemProps {
  items: IItem[];
  removeItem: (id: number) => void;
}

export const CheckItem: FC<CheckItemProps> = ({
  items,
  removeItem,
}): ReactElement => {
  const handleRemove = (val: number): void => {
    removeItem(val);
  };
  return (
    <div
      className="flex gap-4 flex-wrap p-10  h-full
     "
    >
      {!items && <p>No Items</p>}
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 items-center border h-fit w-fit py-2 px-4 rounded-md"
          >
            <input type="checkbox" name={item.name} id={item.id.toString()} />
            <label htmlFor="">
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
