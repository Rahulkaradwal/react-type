import { FC, ReactElement, useEffect, useState } from "react";
import { SideBarMain } from "../components/SideBar/SideBarMain";
import { MapMain } from "../components/Map/MapMain";
import { Loader } from "../components/ui/Loader";
import { Error } from "../components/ui/Error";

interface IPosition {
  lat: number;
  lng: number;
}

export interface IData {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: IPosition;
  id: string;
}

export const AppLayout: FC = (): ReactElement => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3001/cities");
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch {
        setError("Sorry, Could not load the data!");
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <main className=" h-screen flex ">
      {isLoading && <Loader />}
      {!isLoading && error.length > 0 && <Error message={error} />}
      {!isLoading && error.length === 0 && <SideBarMain data={data} />}
      <MapMain />
    </main>
  );
};
