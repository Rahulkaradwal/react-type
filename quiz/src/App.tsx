import { FC, ReactElement } from "react";
import { Home } from "./components/Home/Home";
import QuestionProvider from "./context/QuestionProvider";

const App: FC = (): ReactElement => {
  return (
    <QuestionProvider>
      <Home />;
    </QuestionProvider>
  );
};

export default App;
