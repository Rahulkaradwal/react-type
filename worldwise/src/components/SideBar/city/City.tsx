import { FC, ReactElement } from "react";
import { Loader } from "../../ui/Loader";
import { CityItem } from "./CityItem";
import { Error } from "../../ui/Error";
import { usePost } from "../../../hooks/usePost";

export const City: FC = (): ReactElement => {
  const { data, isLoading, error } = usePost();

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
