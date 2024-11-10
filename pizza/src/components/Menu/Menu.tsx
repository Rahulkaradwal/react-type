import { FC, ReactElement } from "react";
import { pizzaData } from "../../utils/PizzaList";
import { IPizza } from "../../Interfaces";
import { MenuItem } from "./MenuItem";

export const Menu: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-4 overflow-y-scroll ">
      {pizzaData.map((pizza: IPizza, index) => (
        <MenuItem key={index} pizza={pizza} />
      ))}
    </div>
  );
};
