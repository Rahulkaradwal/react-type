import { FC, ReactElement } from "react";
import { IMovie } from "../../Types";

interface WatchedSummaryProps {
  watchedMovie: IMovie[];
}

export const WatchedSummary: FC<WatchedSummaryProps> = ({
  watchedMovie,
}): ReactElement => {
  // const totalMovies = watchedMovie.length;
  const totalMovies = 5;
  const totalTime = 19;
  return (
    <div className="bg-gray-700 rounded-b-lg -mx-4 p-4 shadow-lg mb-4">
      <div>MOVIES YOU WATCHED</div>
      <div className="flex justify-between items-center ">
        <p># {totalMovies} movies</p>
        <p>{totalTime}.0</p>
        <p>0.0</p>
        <p>{totalTime} min</p>
      </div>
    </div>
  );
};
