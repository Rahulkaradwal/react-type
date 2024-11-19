import { FC, ReactElement } from "react";
import { CityItem } from "./CityItem";
import { IData } from "../../App";
import { Loader } from "../ui/Loader";
import { Error } from "../ui/Error";

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
