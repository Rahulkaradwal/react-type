import { FC, ReactElement, useState } from "react";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
import { Box } from "./Box";
import { WatchedBox } from "./WatchedBox";
import { tempMovieData } from "../../utils/MovieData";
import { MovieItem } from "../ui/MovieItem";

export const Layout: FC = (): ReactElement => {
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(true);
  const [isWatchedBoxOpen, setIsWatchedBoxOpen] = useState<boolean>(true);

  return (
    <div className="p-4 h-screen flex flex-col items-center bg-gray-600 ">
      <Header />
      <Dashboard>
        <Box isBoxOpen={isBoxOpen} setIsBoxOpen={setIsBoxOpen}>
          {tempMovieData.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
          ))}
        </Box>
        <WatchedBox
          isBoxOpen={isWatchedBoxOpen}
          setIsBoxOpen={setIsWatchedBoxOpen}
        />
      </Dashboard>
    </div>
  );
};
