import { FC, ReactElement, useState } from "react";
import { Button } from "../ui/Button";
import { IItem } from "../../ItemDecalaration";

interface InputFormProps {
  addItem: (val: IItem) => void;
}

export const InputForm: FC<InputFormProps> = ({ addItem }): ReactElement => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputQuantity, setInputQuantity] = useState<number>(1);

  const itemQuantities = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputQuantity(Number(e.target.value));
  };

  const handleSubmit = (): void => {
    if (inputValue === "") {
      console.log("Please enter a value");
    } else {
      const randomId = Math.random() + 1;
      addItem({ name: inputValue, quantity: inputQuantity, id: randomId });
    }
  };

  return (
    <div className="bg-amber-600 py-4 w-full flex items-center justify-center">
      <div className="flex  gap-3  items-center   py-1 px-4 rounded-md">
        <label htmlFor="cars">What do you need for your trip ?</label>
        <select
          value={inputQuantity}
          onChange={handleQuantity}
          className="w-10 py-1 rounded-md border"
          id="cars"
        >
          {itemQuantities.map((quantity) => (
            <option key={quantity} value={quantity}>
              {quantity}
            </option>
          ))}
        </select>

        <input
          className="w-fit py-1 rounded-md border"
          type="text"
          name="itemName"
          id="itemName"
          value={inputValue}
          onChange={handleValue}
          placeholder="Enter Item Name"
        />
        <Button
          style="text-red-900 bg-blue-400 rounded-full px-4 py-1 text-lg "
          onClick={handleSubmit}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};
