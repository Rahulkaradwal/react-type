import { FC, ReactElement } from "react";
import { IData } from "../../pages/AppLayout";

interface CountryItemProps {
  data: IData;
}

export const CountryItem: FC<CountryItemProps> = ({ data }): ReactElement => {
  return (
    <div className="flex flex-wrap rounded-md text-slate-50 w-40 border-l-4 border-yellow-500  bg-slate-600 py-3 px-6  justify-between text-center items-center gap-2">
      <div className=" flex gap-1 items-center  flex-col">
        <span>{data.emoji}</span>
        <p>{data.country}</p>
      </div>
    </div>
  );
};
