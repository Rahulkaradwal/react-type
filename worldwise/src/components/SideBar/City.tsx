import { FC, ReactElement } from "react";
import { IData } from "../../pages/AppLayout";
import { CityItem } from "./CityItem";

interface CityProps {
  data: IData[];
}

export const City: FC<CityProps> = ({ data }): ReactElement => {
  return (
    <>
      {data.map((val) => (
        <CityItem key={val.id} data={val} />
      ))}
    </>
  );
};
