import { FC, ReactElement } from "react";
import { Button } from "../ui/Button";

export const InputForm: FC = (): ReactElement => {
  return (
    <div className="bg-amber-600 py-4 w-full flex items-center justify-center">
      <div className="flex  gap-3  items-center   py-1 px-4 rounded-md">
        <label htmlFor="cars">What do you need for your trip ?</label>
        <select className="w-10 py-1 rounded-md border" id="cars">
          <option value="volvo">1</option>
        </select>
        <input
          className="w-fit py-1 rounded-md border"
          type="text"
          name=""
          id=""
        />
        <Button
          style="text-red-900 bg-blue-400 rounded-full px-4 py-1 text-lg "
          onClick={() => {}}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};
