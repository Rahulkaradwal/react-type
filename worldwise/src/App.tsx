import { FC, ReactElement } from "react";
import { Homepage } from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { Login } from "./pages/Login";
import { Pricing } from "./pages/Pricing";
import { Product } from "./pages/Product";

const App: FC = (): ReactElement => {
  return (
    <div className="overflow-hidden h-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
