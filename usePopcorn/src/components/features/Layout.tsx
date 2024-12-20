import { FC, ReactElement, useState } from "react";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
import { Box } from "./Box";
import { WatchedBox } from "./WatchBox/WatchedBox";
import { tempMovieData } from "../../utils/MovieData";
import { MovieItem } from "../ui/MovieItem";
import { IMovie } from "../Types";

export const Layout: FC = (): ReactElement => {
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(true);
  const [isWatchedBoxOpen, setIsWatchedBoxOpen] = useState<boolean>(true);
  const [watchedMovie, setWatchedMovie] = useState<IMovie[]>([]);
  const [selectMovie, setSelectMovie] = useState<IMovie | null>(null);

  return (
    <div className="p-4 h-screen flex flex-col items-center bg-gray-600 ">
      <Header />
      <Dashboard>
        <Box isBoxOpen={isBoxOpen} setIsBoxOpen={setIsBoxOpen}>
          {tempMovieData.map((movie) => (
            <MovieItem
              setSelectMovie={setSelectMovie}
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </Box>
        <WatchedBox
          selectMovie={selectMovie}
          watchedMovie={watchedMovie}
          setWatchedMovie={setWatchedMovie}
          isBoxOpen={isWatchedBoxOpen}
          setSelectMovie={setSelectMovie}
          setIsBoxOpen={setIsWatchedBoxOpen}
        />
      </Dashboard>
    </div>
  );
};
