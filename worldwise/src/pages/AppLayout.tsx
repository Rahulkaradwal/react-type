import { FC, ReactElement } from "react";
import { SideBarMain } from "../components/SideBar/SideBarMain";
import { MapMain } from "../components/Map/MapMain";

export const AppLayout: FC = (): ReactElement => {
  return (
    <main className="h-screen flex">
      <SideBarMain />
      <MapMain />
    </main>
  );
};

// {isLoading && <Loader />}
//       {!isLoading && error && <Error message={error} />}
//       {!isLoading && !error && data.length > 0 && <SideBarMain data={data} />}
//       {!isLoading && !error && data.length === 0 && <p>No data available.</p>}
