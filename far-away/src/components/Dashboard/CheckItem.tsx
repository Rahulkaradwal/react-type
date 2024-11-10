import { FC, ReactElement } from "react";
import { Button } from "../ui/Button";

export const CheckItem: FC = (): ReactElement => {
  return (
    <div className="flex gap-3 items-center border w-fit py-2 px-4 rounded-md">
      <input type="checkbox" name="" id="" />
      <label htmlFor="">2 Passport</label>
      <Button style="text-red-900 text-lg " onClick={() => {}}>
        X
      </Button>
    </div>
  );
};
