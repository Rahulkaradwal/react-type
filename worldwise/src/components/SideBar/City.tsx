import { FC, ReactElement } from "react";
import { CityItem } from "./CityItem";
import { IData } from "../../App";

interface CityProps {
  data: IData[];
}

export const City: FC<CityProps> = ({ data }): ReactElement => {
  if (!data || data.length === 0) {
    return <p>No cities available.</p>;
  }

  return (
    <>
      {data.map((val) => (
        <CityItem key={val.id} data={val} />
      ))}
    </>
  );
};
