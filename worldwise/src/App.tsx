import { FC, ReactElement } from "react";
import { Homepage } from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { Login } from "./pages/Login";
import { Pricing } from "./pages/Pricing";
import { Product } from "./pages/Product";
import { AppLayout } from "./pages/AppLayout";
import { Country } from "./components/SideBar/country/Country";
import { CityDetail } from "./components/SideBar/city/CityDetail";
import { City } from "./components/SideBar/city/City";
import { MainForm } from "./components/SideBar/form/MainForm";
import { PostProvider } from "./context/PostProvider";

// import "leaflet/dist/leaflet.css";

const App: FC = (): ReactElement => {
  return (
    <PostProvider>
      <div className="overflow-hidden h-screen ">
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/app" element={<AppLayout />}>
              <Route index element={<City />} />
              <Route path="city" element={<City />} />
              <Route path="city/:id" element={<CityDetail />} />
              <Route path="country" element={<Country />} />
              <Route path="form" element={<MainForm />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PostProvider>
  );
};

export default App;
