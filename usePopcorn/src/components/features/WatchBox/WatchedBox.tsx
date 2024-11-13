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
}

export const WatchedBox: FC<WatchedBoxProps> = ({
  isBoxOpen,
  setIsBoxOpen,
  setWatchedMovie,
  watchedMovie,
}): ReactElement => {
  const handleSubmit = () => {
    setIsBoxOpen((s) => !s);
  };

  const movie = {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Rating: "8.8",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    Description:
      "A theif who steals coropreate secrees throughthe sue of dream-sharing technloogies is given the invers task of planting an idea into the midn of a CEO, but his tragic past may doom the project and his team to disaster.",
  };

  return (
    <div className="p-4 border w-2/4 rounded-lg text-white">
      <Button onClick={handleSubmit} />
      <WatchedSummary />
      <div className={isBoxOpen ? "" : "hidden"}>
        <MovieDetail movie={movie} setWatchedMovie={setWatchedMovie} />
        {watchedMovie.length > 0 &&
          watchedMovie.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </div>
  );
};
