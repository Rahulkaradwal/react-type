import { FC, ReactElement } from "react";
import { IData } from "../../pages/AppLayout";
import { formatDate } from "../../utils/DateConverter";

interface CityItemProps {
  data: IData;
}

export const CityItem: FC<CityItemProps> = ({ data }): ReactElement => {
  return (
    <div className="flex rounded-md text-slate-50 w-[90%] border-l-4 border-green-500  bg-slate-600 py-3 px-6  justify-between items-center gap-2">
      <div className="flex gap-3 items-center">
        <span>{data.emoji}</span>
        <p>{data.cityName}</p>
      </div>
      <div className="flex gap-3 items-center">
        <span>{formatDate(data.date)}</span>
        <button className="px-2 bg-slate-700 cursor-pointer hover:text-slate-400 duration-300 rounded-full">
          &times;
        </button>
      </div>
    </div>
  );
};
