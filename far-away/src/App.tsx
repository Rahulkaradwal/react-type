import { FC, ReactElement } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const App: FC = (): ReactElement => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
