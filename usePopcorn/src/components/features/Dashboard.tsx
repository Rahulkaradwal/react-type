import { FC, ReactElement } from "react";
import { MovieBox } from "./MovieBox";
import { MovieList } from "../ui/MovieList";

export const Dashboard: FC = (): ReactElement => {
  return (
    <div className="py-4 w-4/6  flex  h-screen justify-between  gap-4">
      <MovieBox>{<MovieList />}</MovieBox>
      <MovieBox>{<MovieList />}</MovieBox>
    </div>
  );
};
