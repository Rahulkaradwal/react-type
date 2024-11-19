import { FC, ReactElement } from "react";
import { Loader } from "../../ui/Loader";
import { CityItem } from "./CityItem";
import { Error } from "../../ui/Error";
import { IData } from "../../../App";

interface CityProps {
  data: IData[];
  isLoading: boolean;
  error: string;
}

export const City: FC<CityProps> = ({
  data,
  isLoading,
  error,
}): ReactElement => {
  if (!data || data.length === 0) {
    return <p>No cities available.</p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && error && <Error message={error} />}
      {data.map((val) => (
        <CityItem key={val.id} data={val} />
      ))}
    </>
  );
};
