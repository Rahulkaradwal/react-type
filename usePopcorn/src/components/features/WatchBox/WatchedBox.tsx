import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { Button } from "../../ui/Button";
import { WatchedSummary } from "./WatchedSummary";
import { MovieDetail } from "./MovieDetail";
import { MovieItem } from "../../ui/MovieItem";
import { IMovie } from "../../Types";

interface WatchedBoxProps {
  isBoxOpen: boolean;
  setIsBoxOpen: Dispatch<SetStateAction<boolean>>;
  setWatchedMovie: React.Dispatch<React.SetStateAction<IMovie[]>>;
  watchedMovie: IMovie[];
  selectMovie: IMovie | null;
  setSelectMovie?: React.Dispatch<React.SetStateAction<IMovie | null>>;
}

export const WatchedBox: FC<WatchedBoxProps> = ({
  isBoxOpen,
  setIsBoxOpen,
  setWatchedMovie,
  selectMovie,
  watchedMovie,
  setSelectMovie,
}): ReactElement => {
  const handleSubmit = () => {
    setIsBoxOpen((s) => !s);
  };

  return (
    <div className="p-4  w-2/4 rounded-lg text-white bg-gray-800">
      <Button onClick={handleSubmit} />
      <WatchedSummary />
      <div className={isBoxOpen ? "" : "hidden"}>
        {selectMovie && (
          <MovieDetail
            movie={selectMovie}
            setWatchedMovie={setWatchedMovie}
            setSelectMovie={setSelectMovie}
          />
        )}
        {/* <MovieDetail movie={movie} setWatchedMovie={setWatchedMovie} /> */}
        {watchedMovie.length > 0 &&
          watchedMovie.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </div>
  );
};
