import { FC, ReactElement, useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { IItem } from "./ItemDecalaration";

const App: FC = (): ReactElement => {
  const [items, setItems] = useState<IItem[] | []>([]);

  const addItem = (val: IItem): void => {
    setItems([...items, val]);
  };

  const emptyList = (): void => {
    setItems([]);
  };

  const removeItem = (id: number): void => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Dashboard
        emptyList={emptyList}
        items={items}
        addItem={addItem}
        removeItem={removeItem}
      />
      <Footer />
    </div>
  );
};

export default App;
