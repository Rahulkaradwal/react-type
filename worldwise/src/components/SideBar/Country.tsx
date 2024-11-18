import { FC, ReactElement } from "react";
import { IData } from "../../pages/AppLayout";
import { CountryItem } from "./CountryItem";

interface CountryProps {
  data: IData[];
}

export const Country: FC<CountryProps> = ({ data }): ReactElement => {
  return (
    <div className="flex flex-wrap gap-4 px-4  w-full items-center">
      {data.map((val) => (
        <CountryItem key={val.id} data={val} />
      ))}
    </div>
  );
};
