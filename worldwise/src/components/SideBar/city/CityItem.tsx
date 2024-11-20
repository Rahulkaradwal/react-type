import { FC, ReactElement } from "react";
import { formatDate } from "../../../utils/DateConverter";
import { Link } from "react-router-dom";
import { IData } from "../../../utils/Types";

interface CityItemProps {
  data: IData;
}

export const CityItem: FC<CityItemProps> = ({ data }): ReactElement => {
  return (
    <Link
      to={`city/${data.id}`}
      className="flex rounded-md text-slate-50 w-[90%] border-l-4 border-green-500  bg-slate-600 py-3 px-6  justify-between items-center gap-2"
    >
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
    </Link>
  );
};
