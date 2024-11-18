import { FC, ReactElement, useEffect, useState } from "react";
import { Homepage } from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { Login } from "./pages/Login";
import { Pricing } from "./pages/Pricing";
import { Product } from "./pages/Product";
import { AppLayout } from "./pages/AppLayout";
import { City } from "./components/SideBar/City";
import { Country } from "./components/SideBar/Country";

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

const App: FC = (): ReactElement => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3001/cities");
        const fetchedData = await response.json();
        setData(fetchedData);
        setError("");
      } catch {
        setError("Sorry, Could not load the data!");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="overflow-hidden h-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<City data={data} />} />
            <Route path="city/:id" element={<City data={data} />} />
            <Route path="country/:id" element={<Country data={data} />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/app" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
